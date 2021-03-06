MouseInput = function(el) {
    var x1 = null,
        x2 = null,
        y1 = null,
        y2 = null,
        listener = null;
    $(el).click(function(e) {
        console.log(x1, " ", x2, e);
        if (x1 == null) {
            x1 = e.offsetX;
            y1 = e.offsetY;
            return;
        }
        else if (x2 == null) {
            x2 = e.offsetX;
            y2 = e.offsetY;
            if (listener != null) {
                listener(x1, y1, x2, y2);
            }
        }
        x1 = null;
        y1 = null;
        x2 = null;
        y2 = null;
    });
    return {
        listen: function(l) {
            listener = l;
        },
        ignore: function() {
            listener = null;
        }
    }
}