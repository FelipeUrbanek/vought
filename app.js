var contador = 0

function init() {
  if (contador == 7) {
    contador = 0
  } else if (contador < 0) {
    contador = 6
  }
  if (contador == 0) {
    $('.texto-titulo').text('CAPITÃO PATRIA')
    $('.texto-titulo2').text('Homelander')
    $('.span1').text(
      'Líder dos 7, o Capitão Pátria (Anthony Starr) foi criado em um laboratório para se tornar o maior herói americano. Ele é o equivalente da trama de The Boys ao Superman, mas com tendências mais mortais, embora sua personalidade pública apenas mostre seu lado de escoteiro. O Capitão Pátria é super forte e quase invencível, mas também tem super audição, raio-x e visão a laser, além da habilidade de voar. Uma de suas únicas fraquezas conhecidas é não ser capaz de ver através do zinco (no caso do Superman é através de chumbo).'
    )

    $('.img-hro').attr('src', 'img/captainpatria.svg')

    $('.texto-lateral').css('color', '#263186')
    $('.texto-titulo').css('color', '#263186')
    $('.texto-lateral').text('CAPITÃO PATRIA')

    console.log('0')
  } else if (contador == 1) {
    $('.texto-titulo').text('LUZ ESTRELA')
    $('.texto-titulo2').text('Starlight')
    $('.span1').text(
      'Na série de quadrinhos, ela é conhecida por seu apelido de super-herói, Starlight. Ela tem a capacidade de emitir luz ofuscante de suas mãos e também a capacidade de voar. Annie nasceu com suas habilidades e acidentalmente cegou permanentemente seus pais e os médicos presentes no nascimento. Diante do aumento do custo de vida devido à deficiência, seus pais foram forçados a desistir da custódia de Annie para Vought. Ela foi criada por pais adotivos e participou de vários concursos de super-heróis quando criança.'
    )
    $('.img-hro').attr('src', 'img/luzestrela.svg')
    $('.texto-lateral').text('LUZ ESTRELA')
    $('.texto-lateral').css('color', '#F3D540')
    $('.texto-titulo').css('color', '#F3D540')
    /* console.log('1') */
  } else if (contador == 2) {
    $('.texto-titulo').text('TREM BALA')
    $('.texto-titulo2').text('A-Train')
    $('.span1').text(
      'Reggie Franklin, também conhecido como Trem Bala (Jessie Usher), é o homem mais rápido do planeta e um membro popular dos 7. Ele tem força e resistência aprimoradas, mas o poder principal do Trem Bala é sua velocidade sobre-humana. Ele pode correr mais rápido do que 1.600 quilômetros por hora – ou mais rápido que a velocidade do som. Suas habilidades às vezes são aprimoradas por doses extras de Composto V, que ele usou para manter seu título de homem mais rápido da Terra. O Trem Bala também é o responsável pelo assassinato da namorada de Hughie, Robbie Ward, e participou do contrabando de Composto V por todo o país.'
    )
    $('.img-hro').attr('src', 'img/atrain.svg')
    $('.texto-lateral').text('TREM BALA')
    $('.texto-lateral').css('color', '#77ABD2')
    $('.texto-titulo').css('color', '#77ABD2')

    /*  console.log('2') */
  } else if (contador == 3) {
    $('.texto-titulo').text('RAINHA MAEVE')
    $('.texto-titulo2').text('Queen Maeve')
    $('.span1').text(
      'Maggie Shaw, também conhecida como Rainha Maeve (Dominique McElligott), é a segunda não oficial no comando dos 7. Maeve é a versão de The Boys inspirada na Mulher-Maravilha, mas sem contar com a história de que tenha vindo de uma ilha secreta de amazonas. Ela tem superforça, resistência e agilidade, além de ter maior resistência e reflexos extremamente rápidos. Maeve não pode voar como nos quadrinhos, mas mostrou a habilidade de saltar incrivelmente alto na série.'
    )
    $('.img-hro').attr('src', 'img/rainhamaeve.svg')
    $('.texto-lateral').text('RAINHA MAEVE')
    $('.texto-lateral').css('color', '#6B3F41')
    $('.texto-titulo').css('color', '#6B3F41')

    /*  console.log('3') */
  } else if (contador == 4) {
    $('.texto-titulo').text('PROFUNDO')
    $('.texto-titulo2').text('The Deep')
    $('.span1').text(
      'Profundo (Chase Crawford) é outro membro dos 7. Inspirado no Aquaman, o personagem de The Boys pode se comunicar com criaturas marinhas. Ele foi mostrado conversando com golfinhos, lagostas e muito mais ao longo da série. Sua conexão com eles também pode fazer com que os animais sigam seu comando. O Profundo tem guelras em seu abdômen que permitem que ele também respire debaixo da água, O mesmo é atualmente apontado por estar de licença sabática em Sandusky, Ohio, na trama da série. Entretanto, tal atitude foi tomada após ele ter abusado de Starlight. '
    )
    $('.img-hro').attr('src', 'img/profundo.svg')
    $('.texto-lateral').text('PROFUNDO')
    $('.texto-lateral').css('color', '#202F1B')
    $('.texto-titulo').css('color', '#202F1B')

    /*  console.log('3') */
  } else if (contador == 5) {
    $('.texto-titulo').text('BLACKNOIR')
    $('.texto-titulo2').text('Black Noir')
    $('.span1').text(
      'Black Noir (Nathan Mitchell), como destacamos no início do texto, é o membro mais misterioso dos 7. Seu nome verdadeiro e identidade são desconhecidos, mas ele é um mestre em artes marciais. Essas habilidades são aprimoradas por sua força, agilidade e resistência sobre-humanas. A roupa toda preta de Noir e o silêncio deram a ele uma reputação intimidante. Um clipe da segunda temporada de The Boys foi revelado mostrando o personagem em ação. '
    )
    $('.img-hro').attr('src', 'img/blacknoir.svg')
    $('.texto-lateral').text('BLACKNOIR')
    $('.texto-lateral').css('color', '#161514')
    $('.texto-titulo').css('color', '#161514')

    /*  console.log('3') */
  } else if (contador == 6) {
    $('.texto-titulo').text('TRANSLÚCIDO')
    $('.texto-titulo2').text('Translucent')
    $('.span1').text(
      'Translúcido (Alex Hassell) era um dos membros dos 7, até ser pego pelo grupo liderado por Billy Butcher. Ele tem maior resistência e pele de carbono. Sua pele pode se tornar dura como diamantes, fazendo dele praticamente imperfurável, mas ele também pode se tornar invisível. O único problema com sua invisibilidade é que ele tem que estar completamente nu se não quiser que as pessoas o vejam. No entanto, as partes internas do Translúcido são as mesmas dos humanos normais, o que permitiu que os The Boys pudessem explodi-lo enfiando uma bomba dentro dele. Hughie é quem detonou a bomba. O personagem também foi claramente indicado como um pervertido ao longo da primeira temporada de The Boys, já que ele gostava de ficar invisível e espiar as pessoas no banheiro.'
    )
    $('.img-hro').attr('src', 'img/translucido.svg')
    $('.texto-lateral').text('TRANSLUCIDO')
    $('.texto-lateral').css('color', '#C9AC62')
    $('.texto-titulo').css('color', '#C9AC62')

    /*  console.log('3') */
  }
}
init()

$('#btn-direito').click(function () {
  contador++
  console.log(contador)
  init()
})
$('#btn-esquerdo').click(function () {
  contador--
  console.log(contador)
  init()
})

/* var contador = 1

$('#btn-direito').click(function () {
  if (contador == 1) {
    $('.texto-titulo').text('LUZ ESTRELA')
    $('.texto-titulo2').text('Rebecca Anne "Annie" January ')
    $('.span1').text(
      'Na série de quadrinhos, ela é conhecida por seu apelido de super-herói, Starlight. Ela tem a capacidade de emitir luz ofuscante de suas mãos e também a capacidade de voar. Annie nasceu com suas habilidades e acidentalmente cegou permanentemente seus pais e os médicos presentes no nascimento. Diante do aumento do custo de vida devido à deficiência, seus pais foram forçados a desistir da custódia de Annie para Vought. Ela foi criada por pais adotivos e participou de vários concursos de super-heróis quando criança.'
    )
    $('.img-hro').attr('src', 'img/luzestrela.svg')
    $('.texto-lateral').text('LUZ ESTRELA')
    $('.texto-lateral').css('color', '#F3D540')
    $('.texto-titulo').css('color', '#F3D540')
    contador++
  } else if (contador == 2) {
    $('.texto-titulo').text('texto 2')
    contador++
  } else if (contador == 3) {
    $('.texto-titulo').text('texto 3')
    contador++
  }
})
 */
