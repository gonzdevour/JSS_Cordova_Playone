var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-9463460868384198/9749832066',
    interstitial: 'ca-app-pub-9463460868384198/2226565269',
    rewardvideo: 'ca-app-pub-9463460868384198/1793550943',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-9463460868384198/1587436860',
    interstitial: 'ca-app-pub-9463460868384198/3064170064',
    rewardvideo: 'ca-app-pub-9463460868384198/8662211627',
  };
} else {
  admobid = { // for Windows Phone, deprecated
    banner: '',
    interstitial: '',
    rewardvideo: '',
  };
}

function initAdmob() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: false
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initAdmob, false);
} else {
    initAdmob();
}