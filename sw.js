importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"aab17d7c80b2d4539e74a6b17025e5ff","url":"feedback.html"},{"revision":"861600b081d51750907e82e09bd040a0","url":"images/1a.jpg"},{"revision":"90690fc3eb1570130fced5396518f27c","url":"images/1b.jpg"},{"revision":"5a9d0e13aec6a9442862c1bec0b642e3","url":"images/CD_ellipticity.png"},{"revision":"4a163b93cc690f835adebce0b988af9e","url":"images/CD_spectra.jpg"},{"revision":"d71ab4c2dd1097bf934c2f4b34cf1b73","url":"images/Elliptical-1.png"},{"revision":"f14aab08e2a3a2d582301707e672a4b3","url":"index.html"},{"revision":"2968fe715e78a2ae138bf1fe5e1bb463","url":"objective.html"},{"revision":"fdad50533896b396020b1c848b1a800c","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"9cdf9e8eb4f6094f6bd1c427ad957fc6","url":"posttest.html"},{"revision":"1316edfa730fab67d364b88e9b4bdcc5","url":"posttest.json"},{"revision":"b97a4bbce618fdce54d9716e9a4b6c56","url":"pretest.html"},{"revision":"ce35f965d3734dc28a85a227bd81f0a3","url":"pretest.json"},{"revision":"babbd78079c714795f183436f24e97db","url":"procedure.html"},{"revision":"19584def92a8119812b83572c4b596fd","url":"references.html"},{"revision":"b3115c854d94e03677c71510ea8e3ec8","url":"simulation.html"},{"revision":"3cdeff988a5ec0c179b8dd571c34a5f9","url":"simulation/codes/css/mol.css"},{"revision":"2228181ecbb525c2758bab30959ff58d","url":"simulation/codes/css/mol1.css"},{"revision":"4a427b1c1a4e4140c34b95184c48b35c","url":"simulation/codes/html/finish.html"},{"revision":"08b69c1a47388e3f609822b8a916c484","url":"simulation/codes/html/help.html"},{"revision":"27be4486429d5f87336c22dda6949bb9","url":"simulation/codes/html/help1.html"},{"revision":"eb8e40e0b9dd3576e0119016fa297d53","url":"simulation/codes/html/help2.html"},{"revision":"84418813f9090156592a3118f7e2296b","url":"simulation/codes/html/help3.html"},{"revision":"8313666f62a12791975d9da80a77400f","url":"simulation/codes/html/main.html"},{"revision":"74f8385616d23e0f3eeadc392effe044","url":"simulation/codes/html/ord.html"},{"revision":"acf3eec3f11492494aa99a44cd7cd6c6","url":"simulation/codes/html/q1.html"},{"revision":"30d57ec002b36a96ff1f2684c3884e62","url":"simulation/codes/html/q2.html"},{"revision":"652082873838aff7e8f71cd9f136f238","url":"simulation/codes/html/q3.html"},{"revision":"cd78fc5b7348b418e3ba14636035fd74","url":"simulation/codes/html/q4.html"},{"revision":"ad7b4426662b52d48b5cc71e14f5b121","url":"simulation/codes/html/q5.html"},{"revision":"bd6463178b060e5f3715246f91987d25","url":"simulation/codes/html/q6.html"},{"revision":"e45947bb009fd43f6929e5fb37186424","url":"simulation/codes/html/SRconfig.html"},{"revision":"450957f359266fe50ee5fbd1318d06fc","url":"simulation/codes/images/diagram.png"},{"revision":"13f27321deab54d0f63331d1da465c0e","url":"simulation/codes/images/graph1.png"},{"revision":"0047e9fb647f27812b7db9f292db6fe5","url":"simulation/codes/images/graph2.png"},{"revision":"dba15839bf4a4ba073c817accfcff7ef","url":"simulation/codes/images/graph3.png"},{"revision":"e1ff6c24e6da0c7ed289ec608f358460","url":"simulation/codes/images/graph4.png"},{"revision":"29a9040c8328e8b4770723d869d64428","url":"simulation/codes/images/graph5.png"},{"revision":"084c8adbb50d95584c0b563520cfdc62","url":"simulation/codes/images/graph6.png"},{"revision":"1bcac8fb4faf75f1f08db515ed1a0562","url":"simulation/codes/images/setup_ord.jpg"},{"revision":"52bc0fcc29822e373c290600e718e56e","url":"simulation/codes/images/setup.jpg"},{"revision":"860f1f8955a0d3ed8beeb55e896210df","url":"simulation/codes/js/ans.js"},{"revision":"db668e181010a0838bc8ee4f59c4345c","url":"simulation/codes/js/mol1.js"},{"revision":"987ba0909fe7a21511931fa0a69fdef5","url":"simulation/codes/js/mol2.js"},{"revision":"9fa99ebb3ce26250bdf9816f893601a7","url":"simulation/codes/js/mol21.js"},{"revision":"527093c45941dcf62eeee9c0fb483216","url":"simulation/codes/js/mol22.js"},{"revision":"685274c1a31d33e7f5c98da97ed27a9c","url":"simulation/codes/js/mol23.js"},{"revision":"852f0201213f3f82657f7a0b73322a91","url":"simulation/codes/js/mol24.js"},{"revision":"276358ef9d566cbbe95674d18016e567","url":"simulation/codes/js/mol25.js"},{"revision":"bbb2f29fa543478052921ec0f1437ccc","url":"simulation/codes/js/mol26.js"},{"revision":"c396130c0ffc5b954fd44f74b2842e18","url":"simulation/codes/js/mol3.js"},{"revision":"a8fd90619d1afbe28d1e4952fc822142","url":"simulation/codes/js/mol4.js"},{"revision":"f4fa71d07737068a2a7654986155df92","url":"simulation/codes/js/mol43.js"},{"revision":"b886b1a201c8b43c0165c813cec65463","url":"simulation/codes/js/mol5.js"},{"revision":"5718ac56719dc9c588f10008a8fb5312","url":"simulation/codes/js/mol6.js"},{"revision":"59d66f090fcad3ada28182b30fc5bc4e","url":"simulation/codes/js/overlay.js"},{"revision":"22e828aef4a97043e3c9a14880fe69ba","url":"simulation/codes/js/swf2js.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"06d6e22177b608d8d926504522c9256d","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"0700245374b43a929f0bbdb120dcec50","url":"theory.html"},{"revision":"8da172d20eabfd550a913818274665e2","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );