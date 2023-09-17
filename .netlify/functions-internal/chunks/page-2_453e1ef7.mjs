import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_2532d380.mjs';
import './pages/404_d15c26e9.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                        */import 'svgo';
import 'exifr';
/* empty css                               *//* empty css                                                      *//* empty css                                                                 */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<p>Sed flavum. Stridore nato, Alcandrumque desint ostendit derat, longoque, eadem\niunxit miserum pedum pectora. Liberat sine pignus cupit, ferit mihi venias\namores, et quod, maduere haec <em>gravi</em> contentusque heros. Qui suae attonitas.</p>\n<p><em>Acta caelo</em> ego, hoc illi ferroque, qui fluitque Achillis deiecerat erat\ninhospita arasque ad sume et aquis summo. Fugerat ipse iam. Funeris Iuno Danaos\nest inroravere aurum foret nati aeque tetigisset! Esse ad tibi queritur <a href=\"http://iusserat.net/\">Sol sub\nest</a> pugno solitoque movet coercuit solent caput te?</p>\n<p>Crescit sint petit gemellos gemino, et <em>gemma deus sub</em> Surrentino frena\nprincipiis statione. Soporiferam secunda nulli Tereus is <em>Aeolidae cepit</em>, tua\nperegrinosque illam parvis, deerit sub et times sedant.</p>\n<h2 id=\"apium-haec-candida-mea-movebo-obsuntque-descendat\">Apium haec candida mea movebo obsuntque descendat</h2>\n<p>Furti lucos cum iussa quid temptanti gravitate animus: vocat\n<a href=\"http://rediere.com/\">ira</a>: illa. Primis aeternus, illi cinguntur ad mugitus\naevo repentinos nec.</p>\n<p>Transcurrere tenens in <em>litore</em> tuti plebe circumspicit viventi quoque mox\ntroades medio mea locuta gradus perque sic unguibus\n<a href=\"http://quantoque.io/\">gramen</a>. Effetus celerique nomina quoque. Ire gemino est.\nEurus quaerenti: et lacus, tibi ignorant tertia omnes subscribi ducentem sedit\nexperientia sine ludunt multae. Ponderis memor purasque, ut armenta corpora\nefferre: praeterea infantem in virgam verso.</p>\n<ul>\n<li>Revellit quoniam vulnerat dique respicit</li>\n<li>Modo illis</li>\n<li>Nec victoria quodque</li>\n<li>Spectans si vitis iussorum corpora quas</li>\n</ul>\n<p>Tibi igni, iamque, sum arsuro patet et Talibus cecidere: levati Atlas villosa\ndubium conparentis litem volentem nec? Iuga tenent, passi cumque generosior\nluminis, quique mea aequora ingens bracchia furor, respiramen eram: in. Caelebs\net passu Phaethonta alumna orbem rapuit inplet <a href=\"http://www.virum.net/ille-miserae.html\">adfusaeque\noculis</a> paene. Casus mea cingebant idque\nsuis nymphe ut arae potuit et non, inmota erat foret, facta manu arvum.</p>\n<p>Fugam nec stridentemque undis te solet mentemque Phrygibus fulvae adhuc quam\ncernimus est! Aper iube dederat adsere iamque mortale ita cornua si fundamina\nquem caperet, iubeas stolidae pedesque intrarunt navigat triformis. Undas terque\ndigitos satis in nautae sternuntur curam, iaculum ignoscere <em>pianda dominique\nnostra</em> vivacemque teneraque!</p>");

				const frontmatter = {"section":"Section Header","title":"Page 2","description":"Lorem ipsum dolor sit amet - 2","minutesRead":"2 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/doc/page-2.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed flavum. Stridore nato, Alcandrumque desint ostendit derat, longoque, eadem\niunxit miserum pedum pectora. Liberat sine pignus cupit, ferit mihi venias\namores, et quod, maduere haec _gravi_ contentusque heros. Qui suae attonitas.\n\n_Acta caelo_ ego, hoc illi ferroque, qui fluitque Achillis deiecerat erat\ninhospita arasque ad sume et aquis summo. Fugerat ipse iam. Funeris Iuno Danaos\nest inroravere aurum foret nati aeque tetigisset! Esse ad tibi queritur [Sol sub\nest](http://iusserat.net/) pugno solitoque movet coercuit solent caput te?\n\nCrescit sint petit gemellos gemino, et _gemma deus sub_ Surrentino frena\nprincipiis statione. Soporiferam secunda nulli Tereus is _Aeolidae cepit_, tua\nperegrinosque illam parvis, deerit sub et times sedant.\n\n## Apium haec candida mea movebo obsuntque descendat\n\nFurti lucos cum iussa quid temptanti gravitate animus: vocat\n[ira](http://rediere.com/): illa. Primis aeternus, illi cinguntur ad mugitus\naevo repentinos nec.\n\nTranscurrere tenens in _litore_ tuti plebe circumspicit viventi quoque mox\ntroades medio mea locuta gradus perque sic unguibus\n[gramen](http://quantoque.io/). Effetus celerique nomina quoque. Ire gemino est.\nEurus quaerenti: et lacus, tibi ignorant tertia omnes subscribi ducentem sedit\nexperientia sine ludunt multae. Ponderis memor purasque, ut armenta corpora\nefferre: praeterea infantem in virgam verso.\n\n- Revellit quoniam vulnerat dique respicit\n- Modo illis\n- Nec victoria quodque\n- Spectans si vitis iussorum corpora quas\n\nTibi igni, iamque, sum arsuro patet et Talibus cecidere: levati Atlas villosa\ndubium conparentis litem volentem nec? Iuga tenent, passi cumque generosior\nluminis, quique mea aequora ingens bracchia furor, respiramen eram: in. Caelebs\net passu Phaethonta alumna orbem rapuit inplet [adfusaeque\noculis](http://www.virum.net/ille-miserae.html) paene. Casus mea cingebant idque\nsuis nymphe ut arae potuit et non, inmota erat foret, facta manu arvum.\n\nFugam nec stridentemque undis te solet mentemque Phrygibus fulvae adhuc quam\ncernimus est! Aper iube dederat adsere iamque mortale ita cornua si fundamina\nquem caperet, iubeas stolidae pedesque intrarunt navigat triformis. Undas terque\ndigitos satis in nautae sternuntur curam, iaculum ignoscere _pianda dominique\nnostra_ vivacemque teneraque!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"apium-haec-candida-mea-movebo-obsuntque-descendat","text":"Apium haec candida mea movebo obsuntque descendat"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
