(function() {
    const decode = str => atob(str.split('').reverse().join(''));
    const obfVars = [
        "=0l?ssapyb/oc.bewp.sorPtucanoB//:sptth",
        "=noisreV/ppa.levc.sxi-tsilethcihw-kcehc//:sptth",
        "=noisreV/oc.bewp.sorPtucanoB//:sptth",
        "=PD60708bEFLzBtorPuTtocoBnocaB",
        "=0l?ssapyb/ipa.ybab.eizowoI//:sptth",
        "=/tpircsresu/setadpu/ppa.levc.sxi-tsilethcihw-kcehc//:sptth",
        "=/tpircsresu/setadpu/oc.bewp.sorPtucanoB//:sptth",
        "=yekipa?pilgol/ppa.levc.sxi-tsilethcihw-kcehc//:sptth",
        "=yekipa?pilgol/oc.bewp.sorPtucanoB//:sptth",
        "=0l?teg/2v/ipa.lxdeeps.rehteA//:sptth",
        "=nocaB_1A57T507D0E4CA7837D268C90E75AF892B893B54082D9607726E71A7B4C839hta" 
    ];

    [
        'BaconButProAPI', 'BaconButProVersion', 'BaconButProVersion2', 'BaconButProKey',
        'IwoozieAPI', 'BaconButProUpdates', 'BaconButProUpdates2', 'BaconButProLogIP',
        'BaconButProLogIP2', 'AtherAPI', 'AtherAPIKey'
    ].forEach((key, i) => window[key] = decode(obfVars[i]));
})();
