/**
 * Created by gralinsa on 2014-12-04.
 */
;var Seminar = {
    create: function(name){
        return Object.create(Seminar).init(name);
    },

    init: function(name){
        return this;
    }
};
