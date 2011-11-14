pc.scene.materialplugin.pick = {
    isTransparent: function (material) {
        return false;
    },

    generateStateKey: function (geometry) {
        return geometry.isSkinned() ? 'skin' : 'static';
    },

    getProgram: function (material, geometry) {
        var device = pc.gfx.Device.getCurrent();
        var skinned = geometry.isSkinned();
        var options = {
            skin: skinned
        };
        var library = device.getProgramLibrary();
        var program = library.getProgram("pick", options);
        return program;
    }
};