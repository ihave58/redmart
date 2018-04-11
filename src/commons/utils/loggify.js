function loggify(Wrapped) {
    const methodsToLog = [
        'componentWillMount',
        'componentDidMount',
        'componentWillUnmount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentDidCatch'
    ];

    let originalMethodHandlers = {};

    methodsToLog.forEach((methodName) => {
        originalMethodHandlers[methodName] = Wrapped.prototype[methodName];

        Wrapped.prototype[methodName] = function(...args) {
            let original = originalMethodHandlers[methodName];

            console.groupCollapsed(`${Wrapped.displayName} called ${methodName}`);

            if(methodName === 'componentWillReceiveProps' || 'shouldComponentUpdate' || 'componentWillUpdate') {
                console.log('nextProps', args[0]);
            }

            if(methodName === 'shouldComponentUpdate' || 'componentWillUpdate') {
                console.log('nextState', args[1]);
            }

            if(methodName === 'componentDidUpdate') {
                console.log('prevState', args[0]);
                console.log('prevProps', args[1]);
            }

            console.groupEnd();

            if(original) {
                original = original.bind(this);
                return original(...args);
            }

            if(methodName === 'shouldComponentUpdate' && typeof original === 'undefined') {
                return true;
            }
        };

        Wrapped.prototype.setState = function(partialState, callback) {
            console.groupCollapsed(`${Wrapped.displayName} setState`);
            console.log('partialState', partialState);
            console.log('callback', callback);
            console.groupEnd();

            this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };

    });

    return Wrapped;
}

export default loggify;
