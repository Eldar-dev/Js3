function Devices(state, model){
    this._state = state;
    this.model = model;

    this.on = function(){
        this._state = true;
    };

    this.off = function(){
        this._state = false;
    };

    this.getState = function(){
        return this._state;
    };

    this.getModel = function(){
        return this._model;
    };
}