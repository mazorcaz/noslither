/*
 * noslither main script
 * You can paste this into the console
 */

if (window.noslither) {
	throw new Error('tried to load noslither twice');
}

(function(initfn) {
	if (document.readyState == 'loading') {
		document.addEventListener('DOMContentLoaded', initfn);
	} else {
		initfn();
	}
})(function() {

	window.noslither = {};
	noslither.active = true;
	noslither.apply = function() {
		noslither.zoom.apply();
	}

	noslither.zoom = {};
	noslither.zoom.active = true;
	noslither.zoom.factor = 1;
	noslither.zoom.apply = function() {
		noslither.zoom.applying = true;
		resize();
	}

	document.addEventListener('wheel', e => {
		noslither.zoom.factor *= e.deltaY > 0 ? 0.8 : 1.2;
		if (noslither.zoom.factor < 0.2) noslither.zoom.factor = 0.2;
		if (noslither.zoom.factor > 5) noslither.zoom.factor = 5;
		noslither.zoom.apply();
	});

	window.resize = function() {
		ww = Math.ceil(window.innerWidth);
		hh = Math.ceil(window.innerHeight);

		if (ww != lww || hh != lhh || noslither.zoom.applying) {
			lww = ww;
			lhh = hh;
			noslither.zoom.applying = false;
			svl_bg.style.width = ww + "px";
			svl_bg.style.height = hh + "px";
			svl.style.left = Math.round(ww / 2 - svlww / 2) + "px";
			svl.style.top = Math.round(hh / 2 - svlhh / 2) + "px";
			sbmc.style.width = ww + "px";
			sbmc.style.height = hh + "px";
			hsu = 0;
			if (mbi) {
				var sc = ww / 1245;
				mbi.width = 1245 * sc;
				hsu = Math.ceil(260 * sc);
				mbi.height = hsu;
				hh -= hsu
			}
			ww -= wsu;
			try {
				ocho.style.width = ww + "px";
				ocho.style.height = hh + "px";
				adsController.resize(ww, hh)
			} catch (e) {}
			reposEnterCode();
			if (buildia_shown) reposBuildia();
			if (partycity_shown) reposPartyCity();
			loch.style.bottom = 16 + hsu + "px";
			reposLbf();
			lbh.style.right = 4 + wsu + "px";
			lbs.style.right = 4 + wsu + "px";
			lbn.style.right = 64 + wsu + "px";
			lbp.style.right = lb_w + 64 + 16 + wsu + "px";
			loch.style.right = 16 + wsu + "px";
			plq.style.right = 10 + wsu + "px";
			clq.style.left = Math.floor(ww / 2 - 130) + "px";
			login.style.width = ww + "px";
			grqh.style.right = 20 + wsu + "px";
			etcoh.style.right = 20 + wsu + "px";
			csrvh.style.right = 20 + wsu + "px";
			if (teams_exist) {
				trumpbtnh.style.left = Math.round(ww / 2 + 290 / 2) + "px";
				trumpbtnh.style.top = Math.round(hh - 218) + "px";
				votetxth.style.left = Math.round(ww / 2 - 290 / 2) + "px";
				votetxth.style.top = Math.round(hh - 144) + "px";
				kamalabtnh.style.left = Math.round(ww / 2 - 290 / 2 - 202) + "px";
				kamalabtnh.style.top = Math.round(hh - 218) + "px"
			}
			reposGraphicsQuality();
			pskh.style.left = Math.round(ww * .25 - 44) + "px";
			nskh.style.left = Math.round(ww * .75 - 44) + "px";
			reposSkinStuff();
			pskh.style.top = Math.round(hh / 2 - 44) + "px";
			nskh.style.top = Math.round(hh / 2 - 44) + "px";
			ldmc.style.left = ww / 2 - 64 + "px";
			ldmc.style.top = hh / 2 - 64 + "px";
			reposBskbtns();
			reposCosbtns();
			var wdl = 1800;
			var dl = Math.sqrt(ww * ww + hh * hh);
			var nmww = Math.ceil(ww * wdl / dl);
			var nmhh = Math.ceil(hh * wdl / dl);
			if (nmww > 1500) {
				nmhh = Math.ceil(nmhh * 1500 / nmww);
				nmww = 1500
			}
			if (nmhh > 1500) {
				nmww = Math.ceil(nmww * 1500 / nmhh);
				nmhh = 1500
			}
			if (noslither.active && noslither.zoom.active) {
				nmww /= noslither.zoom.factor;
				nmhh /= noslither.zoom.factor;
			}
			if (hh < 560) lgbsc = Math.max(50, hh) / 560;
			else lgbsc = 1;
			var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
			if (sc == 1) {
				trf(login, "");
				login.style.top = "0px"
			} else {
				var lgt = Math.round(hh * (1 - lgbsc) * 1E5) / 1E5;
				login.style.top = -lgt + "px";
				trf(login, "scale(" + sc + "," + sc + ")")
			}
			if (mww != nmww || mhh != nmhh) {
				mww = nmww;
				mhh = nmhh;
				mc.width = mww;
				mc.height = mhh;
				mwwp50 = mww + 50;
				mhhp50 = mhh + 50;
				mwwp150 = mww + 150;
				mhhp150 = mhh + 150;
				mww2 = mww / 2;
				mhh2 = mhh / 2;
				rdgbg()
			}
			csc = Math.min(ww / mww, hh / mhh);
			trf(mc, "scale(" + csc + "," + csc + ")");
			mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
			mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
		}
		redraw()
	}

});

noslither.apply();
console.log('noslither loaded successfully');