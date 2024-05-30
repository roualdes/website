<script>
  import Lab from '$lib/Lab.svelte';
  export let contents = ["Moar shtuff", "Lecture Notes", ];
  
  import { onMount } from 'svelte';
  import Katex from '$lib/Katex.svelte';

  onMount(() => {
      Plotly.newPlot( "trial", [{
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16] }], {
	      margin: { t: 0 } } );
  })
</script>

<Lab bind:contents>
  <h1>Stuff</h1>
  <h2>Moar shtuff </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla libero id risus imperdiet, nec vulputate nisl sollicitudin. Praesent pharetra tellus gravida feugiat ultricies. Aliquam semper gravida fermentum. Fusce at auctor sapien. In molestie augue vitae erat porttitor, ac cursus metus finibus. Cras rhoncus orci sit amet erat venenatis sollicitudin. Etiam at ultrices justo, ut fermentum risus. Donec a sem a leo blandit lacinia et nec dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec dictum orci. Sed non diam in sapien blandit luctus vitae aliquam est. Mauris a justo turpis. Etiam maximus, mi nec ultrices ultrices, nibh quam condimentum erat, in faucibus tortor risus ac velit. Donec nec malesuada nisl. Maecenas at nulla consequat, feugiat sem ut, fringilla arcu. Sed non felis sagittis, mollis dui et, faucibus est.

  </p>
  <p>Integer turpis risus, aliquet quis ornare viverra, convallis non nibh. Morbi suscipit lacus ipsum, vitae tempus turpis accumsan at. Nam ornare neque id venenatis faucibus. Donec ac mauris porta, ullamcorper magna sit amet, accumsan augue. Nam auctor laoreet consectetur. Nullam facilisis ultrices dolor ac vehicula. Donec sodales, mauris sit amet rhoncus facilisis, nulla nisi volutpat mauris, vitae vehicula quam ante venenatis tellus. Aenean condimentum enim in tellus eleifend fringilla. Fusce non turpis aliquet tortor dignissim pretium. Nulla vulputate auctor commodo. Nulla facilisi. Cras dictum dui eu ante suscipit, vel semper nibh rhoncus. In odio enim, sagittis vehicula eros eget, imperdiet sodales est. Aliquam ligula dolor, sollicitudin sit amet ante mattis, sollicitudin semper erat. Donec scelerisque magna finibus mauris lacinia fermentum in at ex. Nulla imperdiet neque ipsum, nec sodales erat scelerisque id.

  </p>
  <p>Mauris ut venenatis ligula. Nam porta aliquam tortor eu pretium. Nunc eget diam in ex tincidunt elementum ac vitae risus. In sit amet mattis nunc. Nam pretium purus ut lorem scelerisque convallis. Pellentesque consequat, diam sit amet eleifend sodales, massa metus tincidunt sem, a scelerisque sem sem non est. Suspendisse enim felis, mattis in sapien id, posuere commodo ligula. Integer eu arcu eget erat cursus rhoncus. Nullam eget ex non nisl vehicula tempor eget eget mauris. Ut porttitor lacus vel turpis porta, at semper felis sagittis. Maecenas dictum bibendum lorem eget congue.

  </p>
  <p>In vehicula consectetur iaculis. Etiam viverra purus est, non eleifend lacus cursus in. Praesent efficitur tortor odio, a dapibus mauris euismod sed. Cras eget urna at ipsum mattis pulvinar sit amet id nibh. Sed viverra risus in tortor consectetur consequat quis in tortor. Suspendisse mollis metus a sapien mollis elementum. Curabitur quis faucibus purus, vitae imperdiet nulla. Ut quis ipsum augue. Nam convallis consectetur eros. Vestibulum leo ipsum, blandit vel nunc vel, consequat porta massa. Nam ac ipsum sit amet leo euismod euismod. Quisque quis elit elementum diam consectetur scelerisque. Integer ac arcu scelerisque, eleifend magna eu, malesuada mi.

  </p>
  <p>Curabitur elementum rutrum neque, non aliquet sem. Duis erat libero, interdum sit amet dolor non, mattis ornare sapien. Fusce scelerisque, purus vel semper lacinia, lacus odio vestibulum elit, et consequat risus nisi eget mi. Vestibulum posuere dui ex, nec facilisis dolor interdum id. Nulla ipsum ipsum, aliquam consequat bibendum non, tincidunt sit amet urna. Nulla imperdiet nisl id cursus tristique. Quisque dictum dolor ipsum, sit amet accumsan urna accumsan sed. Ut fringilla lacus vitae diam scelerisque, nec tempor elit aliquet.

  </p>
  <p>Integer pulvinar, lorem vel viverra pharetra, nisl elit tincidunt mi, non elementum enim nisi vitae turpis. Sed non porta orci. Donec lobortis gravida odio ut vehicula. Suspendisse potenti. Phasellus pretium placerat aliquam. Aliquam dui eros, imperdiet commodo magna ac, tincidunt vehicula est. Nullam egestas et ligula eget iaculis. Nunc sit amet egestas neque, sit amet elementum massa. Suspendisse a felis odio. Vestibulum rutrum maximus venenatis. Phasellus efficitur et ante vitae accumsan. Pellentesque eu purus condimentum, luctus diam id, blandit eros. Nullam a odio ultrices, porttitor neque ac, cursus elit. Cras vel lacus efficitur, commodo sapien eget, gravida sapien. In blandit arcu eu nulla varius ultrices. Vivamus sed neque sem.

  </p>
  <p>Aliquam non turpis vitae elit mollis egestas et in enim. Morbi aliquam ultrices eros vitae congue. In sodales enim id felis scelerisque cursus. Etiam nulla nisl, bibendum vel justo eu, tristique placerat enim. Nam nec magna nec sem mollis ornare. Nullam a cursus sapien. Maecenas fermentum, quam sed eleifend dignissim, dolor metus vehicula justo, in viverra elit ligula nec quam. Mauris hendrerit enim odio, ac gravida arcu mollis a. Donec laoreet hendrerit quam, nec porta arcu rhoncus nec. Donec tristique blandit commodo.

  </p>
  <p>Aliquam erat volutpat. Praesent vel lacinia ipsum. Phasellus velit orci, condimentum in velit eu, porttitor auctor libero. Donec malesuada dolor in tellus vehicula, luctus facilisis metus interdum. Nam viverra suscipit odio a luctus. Donec scelerisque porttitor odio, et dapibus massa rutrum sit amet. Donec volutpat mattis tellus, mattis luctus nisi accumsan ac. Fusce ut sapien ac risus ornare laoreet. Proin id venenatis ipsum, non finibus nibh. Nulla dapibus lacus in diam vulputate tincidunt. Maecenas condimentum, tellus et lacinia posuere, lorem erat consequat nibh, ac euismod nulla metus vel turpis. Vivamus non quam sit amet mauris cursus porttitor a et est. Pellentesque ante nunc, vestibulum vel augue vel, consequat tincidunt turpis.

  </p>
  <p>Phasellus vitae mattis diam, eu semper libero. Vivamus lobortis sit amet quam in consectetur. Suspendisse id augue eu ante fermentum pharetra. Maecenas semper erat eu purus egestas lacinia. Nullam tincidunt vehicula dignissim. Curabitur vitae vehicula enim. Sed sagittis dui non est ullamcorper, non aliquet lorem tempus. Sed eget hendrerit lectus. Aenean sed nisi eu elit ultrices tempus vel in nibh. Aliquam ut enim pretium, luctus urna in, ornare metus. Nullam ut consectetur leo, nec gravida justo. Suspendisse luctus lorem quis est hendrerit, non sodales metus iaculis. Aenean luctus erat non sem imperdiet ullamcorper. Praesent consectetur efficitur est at ultrices. Pellentesque vel quam eleifend, aliquet augue vel, ornare augue. Phasellus ipsum tellus, rutrum id augue ut, sodales suscipit tortor.

  </p>
  <p>Cras venenatis placerat nisi, id dictum tortor. Nulla nec blandit est. Sed maximus dui ut odio scelerisque suscipit. Nullam ut massa at justo vulputate vestibulum non vel nibh. Integer et eros vehicula, hendrerit neque nec, elementum leo. Proin vitae pulvinar tellus. Praesent fringilla ex dui, dictum lobortis augue tincidunt eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tortor risus, cursus ac sagittis in, venenatis eu nisi. Nulla non urna felis.

  </p>
  <p>Phasellus vehicula porttitor libero, sit amet placerat neque euismod id. In efficitur scelerisque suscipit. Quisque semper ex lectus, a gravida ligula luctus ac. Curabitur nisl magna, fringilla ac pellentesque quis, rutrum at tellus. Praesent sed faucibus diam. Praesent at orci sit amet dolor aliquet gravida. Nulla facilisi. Duis euismod nisi dignissim sodales hendrerit. Maecenas quis commodo ex, id mattis magna. Curabitur vel auctor nibh. Nam vehicula mauris eu fringilla egestas. Ut vulputate est purus, et ornare felis ultrices eu. Nunc elementum ex vel velit tempus maximus. Morbi cursus luctus rutrum. Ut ornare arcu sit amet mi mattis, quis euismod massa cursus. Ut tincidunt nisi sit amet magna vulputate, in commodo odio eleifend.

  </p>
  <p>Pellentesque lorem purus, sollicitudin vel suscipit sed, efficitur nec massa. Morbi ut risus porttitor, tincidunt quam quis, luctus tellus. Sed lectus sem, feugiat ut viverra nec, consectetur sed tortor. Nullam tempus mi nec eleifend malesuada. Praesent commodo, neque vel rhoncus ullamcorper, nulla tortor varius sapien, a ultricies neque lacus quis ante. Suspendisse suscipit luctus sapien, vitae sodales purus pulvinar vitae. Ut tristique, felis et mollis facilisis, nulla nibh bibendum leo, vitae accumsan nisl turpis id massa. Integer mattis vitae nisi id rhoncus. Proin dictum purus ut semper sollicitudin. Pellentesque lacinia blandit nisi sit amet interdum. Donec consectetur lacus vel convallis fringilla. In cursus luctus massa, sed feugiat diam rhoncus id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum a scelerisque risus.

  </p>
  <p>Vestibulum dapibus nibh non turpis scelerisque elementum. Nulla facilisi. Curabitur eu nisi suscipit, laoreet velit id, tincidunt lacus. Donec vel sollicitudin augue. Proin neque diam, tempor sit amet ligula non, pulvinar sollicitudin lacus. Pellentesque consectetur posuere magna, ut sagittis magna vestibulum vel. Pellentesque ante urna, finibus vel vehicula at, laoreet eu ipsum. Mauris tincidunt, metus eu consectetur fringilla, ipsum mi maximus arcu, vel ultrices libero nisi non sem. In hac habitasse platea dictumst.

  </p>
  <p>Nullam a est dui. Aliquam erat volutpat. Cras dui quam, tincidunt a pulvinar mollis, egestas eget urna. Nunc non est faucibus, imperdiet leo at, efficitur elit. Aliquam eleifend nec orci vel bibendum. Morbi consectetur justo lacus, vitae auctor orci feugiat a. Aenean luctus est posuere mi blandit, nec interdum mauris imperdiet. Suspendisse dapibus velit lorem. Donec aliquet velit ut laoreet faucibus.

  </p>
  <p>Sed tempus, tellus vehicula condimentum egestas, risus neque egestas justo, quis tincidunt neque tellus quis purus. Cras ut nisi urna. Curabitur consequat lacus id pretium tincidunt. Ut in sodales est. Praesent tristique mattis neque. Sed eget tristique magna. Duis aliquet rhoncus lectus. Morbi metus lorem, rutrum ac metus a, placerat ultrices eros. Nulla commodo in lectus a pellentesque. Donec ullamcorper vel purus vitae ultricies. Nunc luctus posuere arcu, vel tristique mi laoreet a. Pellentesque faucibus ornare ullamcorper. Maecenas sagittis ac quam a vestibulum. Sed ut est vel tortor malesuada elementum eget sit amet nunc. Donec posuere rhoncus justo, eu mattis arcu accumsan cursus.

  </p>
  <p>Duis aliquam erat a nibh molestie, a ultrices tortor ultricies. Vivamus porttitor lorem non lacus rutrum, vestibulum iaculis augue dignissim. Etiam scelerisque eros id dapibus molestie. Proin tempor maximus massa sed volutpat. Vestibulum nisi lorem, pretium ac quam vel, rutrum venenatis risus. Sed risus orci, sollicitudin ut pulvinar vitae, placerat ut augue. Vivamus viverra euismod nisl vel placerat. Praesent fringilla libero non elit ornare, eu fermentum urna mattis. Quisque vehicula aliquam risus, sit amet elementum massa gravida at. Nullam eleifend lacus neque, nec facilisis risus feugiat quis. In hac habitasse platea dictumst. Quisque semper urna nec posuere eleifend.

  </p>
  <p>Quisque pellentesque erat a interdum viverra. Donec eu feugiat metus. Morbi ut risus metus. Nulla ut dui quis erat consectetur gravida non in neque. Etiam rutrum placerat eros, at suscipit est ullamcorper non. Duis ullamcorper, purus sit amet pellentesque ultrices, felis mauris aliquam ex, sit amet dignissim urna lacus quis nisi. Duis sagittis nunc libero, vel egestas lectus fermentum non. Mauris faucibus sem varius ultrices viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean fringilla, purus et sollicitudin dictum, ante urna venenatis nulla, non posuere arcu nisi eu tellus. Cras sed est semper, tincidunt dolor vel, interdum lectus. Praesent a auctor est. Donec vitae pretium ante. Donec interdum hendrerit consequat.

  </p>
  <p>Etiam neque enim, dictum eu augue in, tempor sagittis dolor. Nullam tellus enim, cursus in augue sed, aliquam gravida purus. Nullam eu pulvinar libero. Donec odio lorem, vehicula sit amet ornare at, maximus eu dui. Quisque aliquet nulla et dignissim sagittis. Quisque at hendrerit nunc, id laoreet mauris. Maecenas facilisis leo mauris. Donec tincidunt mollis dolor a accumsan. Sed gravida urna et metus faucibus venenatis.

  </p>
  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse porta mollis tempor. Aliquam nec lacinia sem. Curabitur at turpis odio. Fusce convallis, ipsum placerat euismod lobortis, erat mi pretium ex, in vulputate mi leo et diam. Curabitur lacus arcu, posuere varius commodo vitae, dapibus a velit. Nam lobortis justo leo, sodales consequat enim rutrum ut. Aliquam gravida sit amet massa ut vestibulum. Vestibulum laoreet, urna in ullamcorper semper, lectus metus feugiat lectus, vel convallis nibh ligula nec massa. In sapien tellus, ultrices ac nisi nec, tempus porttitor nisi. Aliquam erat volutpat. Mauris tristique lobortis condimentum. Phasellus ultricies metus in sapien fringilla, ac facilisis sapien porta. Duis fringilla tempus erat in porttitor.

  </p>
  <p>Morbi massa tortor, tempor eget dignissim nec, sagittis ut eros. Etiam vitae lacus eu erat mattis gravida. Sed pulvinar vulputate tellus eu laoreet. Vestibulum tristique, urna eget hendrerit porta, lacus ante commodo lectus, sed pulvinar mi nisl ac eros. Nulla dapibus, neque porta feugiat imperdiet, metus neque vehicula ipsum, eget hendrerit nisl est vitae mi. Maecenas tincidunt egestas leo, quis pharetra libero ultricies eu. Aenean ut nisi lectus. Suspendisse fermentum elementum nibh, quis maximus dui finibus ultrices. Suspendisse ut nunc sit amet mauris convallis maximus sit amet quis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tincidunt, nibh eu semper auctor, nisi lacus ultrices enim, nec porttitor odio massa at nisl. Curabitur purus erat, aliquam sit amet eros sed, porta sagittis erat. Duis vel tincidunt augue, a tincidunt felis.

  </p>
  <p>Etiam ut suscipit velit. Vestibulum urna ipsum, consectetur in vulputate et, vulputate id nibh. Fusce convallis ex a velit eleifend auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis dolor eget lorem vestibulum commodo vitae vitae nisl. Nulla sollicitudin, nisl at congue mattis, est urna faucibus elit, nec bibendum enim orci eget augue. Aenean finibus enim id malesuada molestie. Donec venenatis fermentum justo, eu aliquam ante venenatis vel.

  </p>
  <p>Mauris at tellus purus. Donec sapien justo, mattis in gravida facilisis, ullamcorper blandit dui. Praesent posuere ipsum ut massa fringilla malesuada. Aliquam placerat a est non mollis. Maecenas semper turpis eros, eu commodo leo iaculis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas elementum pharetra pretium. Etiam in viverra est, sit amet ultrices enim. Fusce a maximus lorem. In laoreet, elit vitae accumsan tincidunt, arcu odio commodo sem, at pellentesque diam mi ut orci. Vestibulum quis iaculis purus. Pellentesque auctor dapibus augue, sit amet viverra nibh iaculis in. Aenean fringilla ante nunc, vel fringilla metus fermentum sit amet.

  </p>
  <p>Etiam fringilla odio quis mi suscipit varius. Pellentesque elementum eros semper nunc auctor aliquet. Integer vitae est facilisis, bibendum orci id, viverra sapien. Nam sapien mi, vestibulum pharetra diam gravida, commodo ornare ante. Fusce sagittis leo orci, blandit consequat eros lacinia at. Suspendisse potenti. Donec ut pellentesque erat, at egestas purus.

  </p>
  <p>Aenean dapibus massa orci, sagittis laoreet lorem accumsan et. Integer bibendum ac tellus eget sodales. Phasellus euismod a felis in tempus. Fusce vitae tortor justo. Donec sit amet ultricies ante, tincidunt commodo quam. Donec blandit augue tortor, eget porttitor elit rhoncus ultrices. Vestibulum hendrerit arcu a tellus efficitur scelerisque. Mauris tempus mi vitae malesuada tincidunt. Mauris nec magna ac lectus sollicitudin vehicula vel in purus. Nulla dapibus ultrices arcu, ac malesuada velit eleifend ut. Mauris commodo neque dui, eget placerat odio pharetra nec.

  </p>
  <p>Nullam ultricies ante faucibus odio mollis molestie. Mauris id justo ligula. Phasellus fermentum luctus felis quis efficitur. Fusce tempor, mauris ac pulvinar semper, eros erat ullamcorper turpis, in interdum dolor augue at est. Cras ac tempus libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pretium risus in nunc sodales, non egestas felis luctus. Duis rutrum purus non gravida volutpat. Mauris posuere magna nec metus tempus, ac imperdiet erat aliquam. Nam tempor eros eu diam commodo, eu blandit est scelerisque. Fusce porttitor lectus ac velit porta pulvinar. Donec venenatis lorem in fermentum placerat.

  </p>
  <p>Pellentesque blandit lorem a lacus ullamcorper accumsan. Suspendisse iaculis a diam vel volutpat. Ut posuere eros id auctor fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eget ipsum quis metus blandit sagittis. Maecenas tempor ultricies eros, a dapibus magna facilisis et. Pellentesque ex nunc, convallis eu porta a, scelerisque eget ligula. Nullam rhoncus turpis convallis urna accumsan eleifend quis sit amet magna. Morbi aliquam lectus quis est molestie, nec ornare sapien volutpat.

  </p>
  <p>Integer consequat purus dui. Sed lobortis laoreet nisl in consectetur. Ut cursus vulputate bibendum. In hac habitasse platea dictumst. Aliquam erat volutpat. Nullam turpis justo, iaculis at nibh a, pellentesque eleifend augue. Nullam in posuere nunc. Mauris molestie, orci eu bibendum maximus, neque justo pulvinar tortor, non auctor ligula purus eget magna. Phasellus laoreet nunc ut turpis ultricies tincidunt. Suspendisse pharetra tortor libero, quis scelerisque lacus rhoncus sed. Donec vel semper est, sed blandit est. Vestibulum vehicula massa id erat tempor ullamcorper. Sed faucibus velit quis mauris iaculis fermentum. Aliquam erat volutpat. Praesent tincidunt tincidunt justo, quis maximus mi vehicula id.

  </p>
  <p>Nunc finibus eget tortor ac consequat. Sed mollis, enim eget vehicula hendrerit, nulla nunc dignissim leo, ac condimentum ex lectus vel ipsum. Nam vehicula mattis lacus. Cras non arcu a massa ultricies lacinia vitae ac nulla. Mauris ac risus consectetur, tempor ante non, sagittis eros. Vestibulum justo metus, eleifend nec semper at, volutpat vitae nibh. Proin malesuada odio lectus, quis fermentum nulla fringilla porttitor. Etiam id leo lobortis, interdum lorem faucibus, sagittis ex. Nulla dapibus, orci ut suscipit aliquet, ligula justo sollicitudin est, venenatis molestie erat eros eu mauris. Vestibulum sodales nisl vel volutpat rutrum. Sed quis viverra felis. Nullam elementum at quam in rhoncus.

  </p>
  <p>Curabitur mauris tortor, iaculis id rutrum eget, scelerisque ornare leo. Mauris consequat cursus mi. Curabitur ipsum magna, ullamcorper vel dui eu, eleifend ullamcorper lorem. Fusce mattis cursus tellus, ac maximus augue vulputate id. Etiam lacinia elementum tempus. Nam sodales dignissim finibus. Curabitur id enim urna. Proin vestibulum, erat vitae vulputate maximus, elit ante hendrerit lorem, ac finibus leo eros vitae magna. Nullam scelerisque tristique mi id pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eleifend ipsum diam, sit amet sagittis nisi laoreet vel. Cras justo tortor, tincidunt sed tristique a, gravida egestas neque. Sed et consectetur massa. Nulla ullamcorper consequat neque ut bibendum.

  </p>
  <p>Praesent eget velit vitae tortor cursus bibendum. Maecenas vehicula lacus quis dolor semper, a blandit nunc lacinia. Donec maximus arcu eu ante lacinia gravida. Fusce lacinia pretium velit quis vehicula. Suspendisse potenti. Morbi mauris diam, semper id augue eget, iaculis tempus orci. Pellentesque sed finibus nulla. Donec dictum nisi ut nisi ultrices, ac accumsan nisl tempus. Nullam hendrerit malesuada ornare. Ut eleifend vel sem in tristique. Sed lacinia, lacus a tristique blandit, nisi ipsum consectetur lorem, vel eleifend tellus velit vitae diam. Aenean quis ornare leo. Pellentesque efficitur dui non leo aliquet finibus.

  </p>
  <p>Nulla sed ipsum ipsum. Aenean at turpis tincidunt, interdum tellus ut, aliquam est. Mauris iaculis tincidunt dictum. Nulla tincidunt mollis porta. Maecenas eu justo sed velit tempus cursus. Nulla in consequat nulla. Suspendisse vitae mi vel nisl pulvinar commodo. Nunc volutpat lectus nec nunc accumsan venenatis. Morbi ut cursus nisi. Donec est purus, ullamcorper quis rhoncus volutpat, interdum in quam. Nam varius libero et sem sollicitudin, tempor suscipit ipsum bibendum. Proin ac massa nec massa gravida blandit.

  </p>
  <p>Donec id nisi dictum, accumsan mauris a, venenatis ex. In at dapibus mauris. Phasellus id lacus cursus, rutrum purus sit amet, varius augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pharetra justo vel magna finibus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut egestas ornare nisl, dictum pretium ex faucibus et. Aliquam sed dui efficitur, consectetur tortor consectetur, dignissim arcu. Morbi arcu mauris, feugiat sit amet risus gravida, dapibus elementum leo. Integer tincidunt sit amet elit ultricies hendrerit. Phasellus non consectetur dolor, et dignissim massa.

  </p>
  <p>Nam eu lacinia justo. Sed vitae metus turpis. Fusce vel ipsum condimentum, blandit magna eu, efficitur erat. Nulla tristique mattis magna non pharetra. Duis imperdiet lorem vitae nulla dictum, eget semper neque tempor. Mauris vehicula massa et felis commodo, eget malesuada massa fringilla. Morbi cursus, orci id accumsan tempor, elit tortor cursus erat, in porttitor leo risus nec purus. Praesent feugiat vestibulum orci id euismod. Phasellus enim massa, suscipit laoreet risus at, feugiat bibendum urna. Integer tempor bibendum tincidunt. Ut fringilla libero sit amet purus ornare porttitor. Sed convallis semper tellus vel iaculis.

  </p>
  <p>Donec non diam vel eros semper sagittis vitae in velit. Praesent tempor augue id placerat cursus. Pellentesque hendrerit nisl id nisi faucibus semper. Suspendisse justo arcu, elementum vitae vestibulum ac, congue vel ipsum. Morbi consectetur enim quis risus efficitur, vitae hendrerit turpis fermentum. Ut eleifend feugiat tortor, in semper eros cursus a. Integer tincidunt vulputate nibh ac facilisis. Nulla diam velit, commodo vel molestie in, cursus quis turpis. Nulla scelerisque vestibulum sapien, sed cursus est ultrices sed. Curabitur turpis nunc, sagittis ut lobortis at, condimentum quis sapien. Mauris id volutpat nunc, in ultrices libero. Nunc orci turpis, semper non lorem nec, blandit tempus libero. Integer porta sapien nisi, eu sagittis metus finibus quis.

  </p>
  <p>Aliquam blandit nisi enim, eget faucibus sapien dictum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lobortis, quam in vulputate congue, nisl quam varius diam, a eleifend diam sem non sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam congue tristique lacus, tincidunt euismod tellus pharetra at. Aliquam aliquet, felis at rutrum sagittis, velit sem sollicitudin ligula, sed vestibulum quam mauris nec elit. Proin metus lacus, varius quis lacus eget, dictum aliquet nibh. Integer enim neque, condimentum et convallis in, pulvinar non mauris.

  </p>
  <p>Quisque eget felis finibus, pretium metus eget, convallis velit. Phasellus ultrices lorem magna, vitae vestibulum turpis varius vitae. Aenean facilisis diam ut dictum condimentum. Cras tempor magna vel ipsum placerat, in fringilla orci fringilla. Nulla ornare diam non ex accumsan, in rutrum nisi porttitor. Vestibulum nec ipsum ornare, tristique nulla sed, semper justo. Donec eget euismod risus, vel feugiat mi. Quisque tristique maximus erat, sed vulputate quam volutpat eu. Aenean commodo nisl eget tellus ornare sagittis. Etiam eu velit felis. In efficitur elit ipsum, non vehicula sapien pharetra id. Pellentesque ultrices viverra mi, id varius libero. Praesent porttitor eu neque dignissim ultrices. Quisque id ipsum pulvinar, mollis nulla vel, imperdiet ante. Praesent nunc leo, malesuada ac fermentum volutpat, volutpat euismod lacus. Ut cursus mi malesuada porttitor fermentum.

  </p>
  <p>Aenean non purus ac purus commodo pharetra. Etiam in risus vestibulum, feugiat ipsum non, laoreet elit. Vestibulum sapien dui, mattis non felis sed, semper varius tortor. Suspendisse accumsan ex ac purus dignissim, facilisis molestie massa egestas. Morbi enim nisl, maximus id ultrices ut, luctus vel turpis. Nunc sed consectetur enim, vitae dignissim leo. Vestibulum suscipit felis enim, et tincidunt lorem laoreet vitae. Integer convallis lectus odio, vel rhoncus mauris placerat in. Ut sed quam pellentesque, sagittis tellus quis, fermentum nulla. Nam nisl justo, venenatis et finibus quis, euismod id felis. Proin at ultrices dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

  </p>
  <p>Vivamus non leo nulla. Vivamus pulvinar, enim ac cursus dapibus, dolor risus bibendum diam, eu tempus risus augue placerat nisl. Mauris faucibus tincidunt mi, ultrices blandit felis molestie quis. Ut sapien tellus, lobortis sed dolor nec, tempor mattis nisl. Nulla ornare fringilla orci at condimentum. Suspendisse enim quam, varius efficitur ligula sit amet, euismod pharetra ante. Sed arcu mi, luctus sed erat sit amet, scelerisque bibendum sem. Nullam in quam vitae ante vehicula pulvinar id ut sapien. Aenean faucibus mollis commodo. Nam justo orci, bibendum quis dolor a, viverra efficitur turpis. Vivamus luctus efficitur neque vel dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

  </p>
  <p>Vestibulum dignissim, nisi sit amet fringilla venenatis, nulla velit euismod neque, at finibus risus enim commodo sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi interdum justo sem, nec sagittis odio ornare id. Quisque elit urna, rhoncus a consectetur varius, convallis a erat. Nam lacinia arcu lacus, sit amet tincidunt sem varius id. Quisque tincidunt porttitor turpis ac aliquam. Proin convallis vestibulum pulvinar. In hendrerit metus neque, quis molestie sem dignissim non. Nam auctor augue sit amet gravida sagittis.

  </p>
  <p>Pellentesque maximus ipsum aliquam nulla vestibulum rhoncus. Etiam consectetur metus nulla, vel sagittis tellus efficitur sit amet. Morbi commodo leo at vehicula vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eleifend, nisi vitae iaculis egestas, dolor lectus hendrerit purus, eu egestas nibh nisi vitae orci. Nam eget consectetur magna, eget placerat augue. Etiam tristique sagittis suscipit. Etiam et ullamcorper elit. Maecenas ullamcorper odio vitae est convallis consectetur. Suspendisse cursus ornare arcu, sodales euismod risus placerat vitae. Curabitur porttitor euismod nisi in pretium. Mauris nec neque quis risus porta ultrices sit amet in leo.

  </p>
  <p>Curabitur et mattis lacus. Nam finibus eros sapien, vulputate scelerisque massa aliquet vitae. Praesent in diam ac nulla viverra pretium eu at est. Nullam euismod felis gravida leo mattis, at viverra mauris malesuada. Nulla sit amet dolor est. Curabitur ornare interdum lectus ac sollicitudin. Nunc ullamcorper porttitor hendrerit. Nam tincidunt aliquet metus nec venenatis. Pellentesque sit amet elit orci. Quisque tempor turpis ut sem auctor vestibulum. Cras lacinia tincidunt rhoncus. Phasellus lectus nibh, lacinia euismod nibh nec, sagittis laoreet eros. Quisque aliquam arcu orci, vitae vestibulum magna aliquam at.

  </p>
  <p>Duis eleifend, lacus ut semper maximus, dolor ex pellentesque dui, quis bibendum elit risus ac nisi. Duis lacinia velit nec neque sodales, sit amet accumsan elit maximus. Proin id lacus eu odio interdum consequat eu vitae enim. Proin quis ante eget eros eleifend tristique malesuada sit amet nunc. Morbi interdum risus quis arcu finibus, et hendrerit enim condimentum. Phasellus imperdiet arcu quis est varius convallis. Pellentesque vel elit libero. Etiam suscipit vulputate mi at ultricies. Aliquam maximus odio bibendum velit sollicitudin, id ornare leo accumsan. Proin interdum nisl magna. Nullam volutpat mauris sit amet mi imperdiet, vel accumsan eros imperdiet. Pellentesque ut est mi. Vivamus et risus at lectus ultricies hendrerit nec pretium neque.

  </p>
  <p>Nulla feugiat euismod est quis iaculis. Fusce eu lorem at ligula feugiat placerat. Nulla tempus urna vel diam sollicitudin pharetra. Etiam cursus dolor eu nulla malesuada consequat. In aliquet tempus velit nec pellentesque. Vivamus luctus volutpat venenatis. Integer eu efficitur quam. Aliquam mattis lobortis sem, eget bibendum libero rutrum quis. Praesent varius leo nisl, vel auctor libero rhoncus ut. Aliquam blandit tellus sed ex varius, sit amet lobortis urna maximus. Praesent in posuere ipsum.

  </p>
  <p>Cras auctor est justo, nec fringilla eros sagittis ut. Aliquam vulputate laoreet hendrerit. In fringilla vulputate diam, non tincidunt mi placerat eget. Nunc ac magna ultricies, luctus urna nec, dapibus odio. Maecenas suscipit, risus vitae eleifend fermentum, metus velit iaculis nisl, ac posuere libero mi ac sem. Proin efficitur ornare semper. Mauris id orci urna. Fusce feugiat euismod tristique. In est ante, dictum non convallis a, egestas sed diam. Pellentesque a ex sit amet massa dignissim tristique. Ut dui ipsum, dignissim a tincidunt et, dapibus ut urna. Morbi vel rhoncus turpis. Vestibulum in massa et diam tincidunt laoreet. Morbi at ultricies nulla, id lobortis mauris.

  </p>
  <p>
    Sed viverra tortor et massa dignissim interdum. Phasellus suscipit sapien et vestibulum placerat. Vestibulum pharetra bibendum lectus, ut sodales dolor consequat a. Aliquam ac rutrum lorem. Etiam hendrerit luctus enim a auctor. Duis dapibus libero non risus rutrum efficitur non scelerisque turpis. Cras feugiat lectus ut dolor pretium tincidunt. Sed hendrerit leo eget nisi tristique, vitae interdum odio laoreet. Proin pharetra, purus ac elementum tincidunt, justo arcu vehicula elit, id eleifend mauris nibh sed lacus. Vivamus bibendum risus quis ante bibendum, nec convallis diam tempus. Phasellus odio augue, imperdiet ut justo id, lobortis rhoncus magna. Aliquam mattis eleifend dui quis molestie. Cras et eros vel nibh maximus imperdiet ut a mi.
  </p>
  <p>
    Fusce ac maximus lorem, at commodo leo. Phasellus sit amet urna felis. Praesent sapien erat, sagittis at blandit sollicitudin, dapibus eu diam. Nulla sapien neque, finibus eget metus vestibulum, elementum tempor nisi. Aliquam hendrerit at arcu non venenatis. Aliquam ullamcorper maximus imperdiet. Suspendisse potenti. Donec lacus massa, tempus malesuada sollicitudin fringilla, posuere quis magna. Curabitur ultricies dapibus dui nec rhoncus. Ut viverra tellus vitae nisl venenatis, id ornare diam vehicula. Cras augue elit, eleifend quis sem sit amet, aliquam elementum lorem. Proin vehicula, erat eleifend placerat tincidunt, justo dolor pharetra nisl, sit amet varius ex dui sit amet lacus. Etiam eu egestas nulla, vitae malesuada eros. Vivamus ut orci sodales, vehicula mauris porttitor, efficitur felis. Ut volutpat commodo interdum.
  </p>
  <p>
    Donec eu massa est. Quisque ut odio placerat, pulvinar enim et, scelerisque tellus. Fusce efficitur lacus facilisis orci vulputate, a facilisis tellus volutpat. Sed cursus finibus pellentesque. Suspendisse pharetra risus quam. Aliquam suscipit gravida nisi in malesuada. Morbi nec urna quam. Praesent convallis rutrum dignissim. Vivamus in tellus sollicitudin arcu commodo feugiat sit amet sit amet tortor. Fusce tempus dolor vitae dolor imperdiet convallis. Suspendisse ac nibh orci. Donec vestibulum urna vitae elit varius, non fermentum ligula condimentum. Fusce risus tellus, auctor at felis nec, suscipit commodo leo.
  </p>
  <p>
    Sed laoreet orci in lorem consectetur posuere. Donec lacinia, lorem at rhoncus commodo, arcu lacus mollis metus, sed fermentum urna urna ac velit. Nullam sed odio quis felis tempus auctor. Donec iaculis bibendum nunc ac fermentum. Sed id porttitor elit. Vivamus ornare eu neque nec imperdiet. Curabitur vel facilisis odio, quis hendrerit lectus. Aenean vitae nisi eu dui eleifend auctor in vel lectus. Integer volutpat non nibh et ultricies. Nunc lacinia aliquam tincidunt. Aenean a felis rutrum, dignissim quam quis, condimentum urna. Nullam ullamcorper lacinia turpis id convallis. Nullam maximus nisl mi, nec pulvinar erat porttitor quis. Sed posuere justo non sapien mollis rutrum. Morbi sit amet purus ut ex convallis egestas ut at erat. Aliquam vehicula ultricies massa eget imperdiet.
  </p>
  <p>
    Praesent non leo velit. Morbi orci justo, ultricies ac fermentum vel, pulvinar at tortor. Aliquam rutrum, felis vitae placerat rhoncus, urna lorem eleifend ex, eget placerat nunc lacus quis massa. Suspendisse non eros id neque porttitor tempus. Etiam id nisi eget dui efficitur semper. Nulla sit amet augue sed tellus fringilla ultrices a ac augue. Nullam eu nunc quis magna aliquet consequat in in nisi. Fusce accumsan neque et mauris laoreet consequat. Mauris ac tellus fermentum, ultricies magna sed, eleifend ex. Pellentesque commodo, lectus eget gravida elementum, dolor ipsum maximus neque, non tempor eros dolor vel dui.
  </p>
  <p>
    Donec vel sollicitudin dolor. Suspendisse eget nibh sem. Cras porttitor placerat purus. Aenean tempus nisl ex, luctus commodo nisi tristique sit amet. Nunc eu massa et dui placerat semper. Cras mollis finibus leo, et condimentum purus maximus ac. Ut fermentum et tellus ut aliquet. Quisque lacinia elit at erat varius, a elementum arcu tempus. Suspendisse potenti.
  </p>
  <h2>Lecture Notes</h2>

  <p>
    <Katex displayMode math={"\\mathbb{E}[f] = \\int_{\\Omega} f \\, dF"}/>
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla libero id risus imperdiet, nec vulputate nisl sollicitudin. Praesent pharetra tellus gravida feugiat ultricies. Aliquam semper gravida fermentum. Fusce at auctor sapien. In molestie augue vitae erat porttitor, ac cursus metus finibus. Cras rhoncus orci sit amet erat venenatis sollicitudin. Etiam at ultrices justo, ut fermentum risus. Donec a sem a leo blandit lacinia et nec dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec dictum orci. Sed non diam in sapien blandit luctus vitae aliquam est. Mauris a justo turpis. Etiam maximus, mi nec ultrices ultrices, nibh quam condimentum erat, in faucibus tortor risus ac velit. Donec nec malesuada nisl. Maecenas at nulla consequat, feugiat sem ut, fringilla arcu. Sed non felis sagittis, mollis dui et, faucibus est.

  </p>
  <p>Integer turpis risus, aliquet quis ornare viverra, convallis non nibh. Morbi suscipit lacus ipsum, vitae tempus turpis accumsan at. Nam ornare neque id venenatis faucibus. Donec ac mauris porta, ullamcorper magna sit amet, accumsan augue. Nam auctor laoreet consectetur. Nullam facilisis ultrices dolor ac vehicula. Donec sodales, mauris sit amet rhoncus facilisis, nulla nisi volutpat mauris, vitae vehicula quam ante venenatis tellus. Aenean condimentum enim in tellus eleifend fringilla. Fusce non turpis aliquet tortor dignissim pretium. Nulla vulputate auctor commodo. Nulla facilisi. Cras dictum dui eu ante suscipit, vel semper nibh rhoncus. In odio enim, sagittis vehicula eros eget, imperdiet sodales est. Aliquam ligula dolor, sollicitudin sit amet ante mattis, sollicitudin semper erat. Donec scelerisque magna finibus mauris lacinia fermentum in at ex. Nulla imperdiet neque ipsum, nec sodales erat scelerisque id.

  </p>
  <p>Mauris ut venenatis ligula. Nam porta aliquam tortor eu pretium. Nunc eget diam in ex tincidunt elementum ac vitae risus. In sit amet mattis nunc. Nam pretium purus ut lorem scelerisque convallis. Pellentesque consequat, diam sit amet eleifend sodales, massa metus tincidunt sem, a scelerisque sem sem non est. Suspendisse enim felis, mattis in sapien id, posuere commodo ligula. Integer eu arcu eget erat cursus rhoncus. Nullam eget ex non nisl vehicula tempor eget eget mauris. Ut porttitor lacus vel turpis porta, at semper felis sagittis. Maecenas dictum bibendum lorem eget congue.

  </p>
  <p>In vehicula consectetur iaculis. Etiam viverra purus est, non eleifend lacus cursus in. Praesent efficitur tortor odio, a dapibus mauris euismod sed. Cras eget urna at ipsum mattis pulvinar sit amet id nibh. Sed viverra risus in tortor consectetur consequat quis in tortor. Suspendisse mollis metus a sapien mollis elementum. Curabitur quis faucibus purus, vitae imperdiet nulla. Ut quis ipsum augue. Nam convallis consectetur eros. Vestibulum leo ipsum, blandit vel nunc vel, consequat porta massa. Nam ac ipsum sit amet leo euismod euismod. Quisque quis elit elementum diam consectetur scelerisque. Integer ac arcu scelerisque, eleifend magna eu, malesuada mi.

  </p>
  <p>Curabitur elementum rutrum neque, non aliquet sem. Duis erat libero, interdum sit amet dolor non, mattis ornare sapien. Fusce scelerisque, purus vel semper lacinia, lacus odio vestibulum elit, et consequat risus nisi eget mi. Vestibulum posuere dui ex, nec facilisis dolor interdum id. Nulla ipsum ipsum, aliquam consequat bibendum non, tincidunt sit amet urna. Nulla imperdiet nisl id cursus tristique. Quisque dictum dolor ipsum, sit amet accumsan urna accumsan sed. Ut fringilla lacus vitae diam scelerisque, nec tempor elit aliquet.

  </p>

  <div style="width:600px;height:400px;" id="trial"/>
</Lab>
