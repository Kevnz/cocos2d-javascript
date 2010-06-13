CC.Sprite = CC.Node.extend({
	texture: null,
	img: null,

	init: function(texture) {
		@super;

		var texture = this.set('texture', texture),
			img = this.set('img', new Image);

		img.onload = CC.callback(this, function() {
			this.set('contentSize', {width:img.width, height: img.height});
		});

		img.src = texture;

	},

	draw: function(ctx) {
		ctx.drawImage(this.get('img'), 0, 0, this.contentSize.width * this.scale, this.contentSize.height * this.scale);
	}
});
