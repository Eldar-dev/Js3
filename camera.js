function Camera(state, mode, record, live) {
    Devices.call(this, state);
    this._mode = mode;
    this._record = record;
    this._live = live;
    
    this.dayMode = function() {
      this._mode = "  day";
    };

    this.nightMode = function() {
      this._mode = "   night";;
    };

    this.getMode = function () {
      return this._mode;
    };

    this.getType = function () {
      if (this._record == true) {
          return this._state;
      }
      if (this._live == true) {
          return this._state;
      }
    };


}
