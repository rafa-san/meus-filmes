const filmes = [
  {filme: 'Na Mira do Chefe', ano: 2008, diretor: 'Martin McDonagh'},
  {filme: 'Candy', ano: 2005, diretor: 'Neil Armfield'},
  {filme: 'Clube da Luta', ano: 1999, diretor: 'David Fincher'},
  {filme: '(500) Dias com Ela', ano: 2009, diretor: 'Marc Webb'},
  {filme: 'De Volta para o Futuro', ano: 1985, diretor: 'Robert Zemeckis'},
  {filme: 'Vingadores: Guerra Infinita', ano: 2018, diretor: 'Anthony Russo, Joe Russo'}, // 2 diretores
  {filme: 'Trovão Tropical', ano: 2008, diretor: 'Ben Stiller'},
  {filme: 'Eu, Tonya', ano: 2017, diretor: 'Craig Gillespie'},
  {filme: 'Gravidade', ano: 2013, diretor: 'Alfonso Cuarón'},
  {filme: 'Shrek 2', ano: 2004, diretor: 'Andrew Adamson, Kelly Asbury, Conrad Vernon'}, // 3 diretores
  {filme: 'Viagem à Lua', ano: 1902, diretor: 'Georges Méliès'},
  {filme: 'Adeus, Lenin!', ano: 2003, diretor: 'Wolfgang Becker'},
  {filme: 'Aconteceu Naquela Noite', ano: 1934, diretor: 'Frank Capra'},
  {filme: '300', ano: 2006, diretor: 'Zack Snyder'},
  {filme: 'Casablanca', ano: 1942, diretor: 'Michael Curtiz'},
  {filme: 'Viagem de Chihiro, A', ano: 2001, diretor: 'Hayao Miyazaki'},
  {filme: 'Cantando na Chuva', ano: 1952, diretor: 'Stanley Donen, Gene Kelly'}, // 2 diretores
  {filme: 'Capitão América: O Primeiro Vingador', ano: 2011, diretor: 'Joe Johnston'},
  {filme: 'Doce Vida, A', ano: 1960, diretor: 'Federico Fellini'},
  {filme: 'Trainspotting: Sem Limites', ano: 1996, diretor: 'Danny Boyle'},
  {filme: 'Amor à Tarde', ano: 1972, diretor: 'Eric Rohmer'},
  {filme: 'Corra!', ano: 2017, diretor: 'Jordan Peele'},
  {filme: 'Iluminado, O', ano: 1980, diretor: 'Stanley Kubrick'},
  {filme: 'Star Wars Episódio VII: O Despertar da Força', ano: 2015, diretor: 'J. J. Abrams'},
  {filme: 'Curtindo a Vida Adoidado', ano: 1986, diretor: 'John Hughes'},
  {filme: 'Senhor dos Anéis: O Retorno do Rei, O', ano: 2003, diretor: 'Peter Jackson'},
  {filme: 'Dança com Lobos', ano: 1990, diretor: 'Kevin Costner'},
  {filme: 'Escola de Rock', ano: 2003, diretor: 'Richard Linklater'},
  {filme: 'Pulp Fiction: Tempo de Violência', ano: 1994, diretor: 'Quentin Tarantino'},
  {filme: 'Rango', ano: 2011, diretor: 'Gore Verbinski'},
  {filme: 'Toy Story', ano: 1995, diretor: 'John Lasseter'},
  {filme: 'Simpsons – O Filme, O', ano: 2007, diretor: 'David Silverman'},
  {filme: 'Auto da Compadecida, O', ano: 1999, diretor: 'Guel Arraes'},
  {filme: 'Desejo e Reparação', ano: 2007, diretor: 'Joe Wright'},
  {filme: 'Miami Vice', ano: 2006, diretor: 'Michael Mann'},
  {filme: 'Sexto Sentido, O', ano: 1999, diretor: 'M. Night Shyamalan'},
  {filme: 'Johnny & June', ano: 2005, diretor: 'James Mangold'},
  {filme: 'Amor à Flor da Pele', ano: 2000, diretor: 'Wong Kar-Wai'},
  {filme: 'Batman Begins', ano: 2005, diretor: 'Christopher Nolan'},
  {filme: 'Matrix Revolution', ano: 2003, diretor: 'Lana Wachowski, Lilly Wachowski'}, // 2 diretores
  {filme: 'Dia de Treinamento', ano: 2001, diretor: 'Antoine Fuqua'},
  {filme: 'Senhor dos Anéis: A Sociedade do Anel, O', ano: 2001, diretor: 'Peter Jackson'},
  {filme: 'Efeito Borboleta', ano: 2004, diretor: 'Eric Bress, J. Mackye Gruber'}, // 2 diretores
  {filme: 'Chamas da Vingança', ano: 2004, diretor: 'Tony Scott'},
  {filme: 'Senhor dos Anéis: As Duas Torres, O', ano: 2002, diretor: 'Peter Jackson'},
  {filme: 'De Volta para o Futuro III', ano: 1990, diretor: 'Robert Zemeckis'},
  {filme: 'Spirit: O Corcel Indomável', ano: 2002, diretor: 'Lorna Cook, Kelly Asbury'}, // 2 diretores 
  {filme: 'Quicksilver – O Prazer de Ganhar', ano: 1986, diretor: 'Tom Donnelly'},
  {filme: 'Matrix Reloaded', ano: 2003, diretor: 'Lana Wachowski, Lilly Wachowski'}, // 2 diretores
  {filme: 'Sonho de Liberdade, Um', ano: 1984, diretor: 'Frank Darabont'},
  {filme: 'Brilho Eterno de uma Mente sem Lembranças', ano: 2004, diretor: 'Michel Gondry'},
  {filme: 'Edukators', ano: 2004, diretor: 'Hans Weingartner'},
  {filme: 'Supremacia Bourne, A', ano: 2004, diretor: 'Paul Greengrass'},
  {filme: 'Shrek', ano: 2001, diretor: 'Andrew Adamson,Vicky Jenson'}, // 2 diretores
  {filme: 'Jardineiro Fiel, O', ano: 2005, diretor: 'Fernando Meirelles'},
  {filme: 'Fargo', ano: 1996, diretor: 'Joel Coen, Ethan Coen'}, // 2 diretores
  {filme: 'Labirinto do Fauno, O', ano: 2006, diretor: 'Guilhermo del Toro'},
  {filme: 'Assassinato de Jesse James pelo Covarde Robert Ford, O', ano: 2007, diretor: 'Andrew Dominik'},
  {filme: 'Onde os Fracos Não Têm Vez', ano: 2007, diretor: 'Joel Coen, Ethan Coen'}, // 2 diretores
  {filme: 'E aí, Meu Irmão, Cadê Você?', ano: 2000, diretor: 'Joel Coen, Ethan Coen'}, // 2 diretores
  {filme: 'Homem de Ferro', ano: 2008, diretor: 'Jon Favreau'},
  {filme: 'Beleza Americana', ano: 1999, diretor: 'Sam Mendes'},
  {filme: 'Ilha do Medo', ano: 2009, diretor: 'Martin Scorsese'},
  {filme: 'Atração Perigosa', ano: 2010, diretor: 'Ben Affleck'},
  {filme: 'Origem, A', ano: 2010, diretor: 'Christopher Nolan'},
  {filme: 'Intocáveis', ano: 2011, diretor: 'Olivier Nakache, Eric Toledano'}, // 2 diretores
  {filme: 'Fabuloso Destino de Amélie Poulain, O', ano: 2001, diretor: 'Jean-Pierre Jeunet'},
  {filme: 'Ted', ano: 2012, diretor: 'Seth MacFarlane'},
  {filme: 'Homem de Ferro 3', ano: 2013, diretor: 'Shane Black'},
  {filme: 'Toy Story 2', ano: 1999, diretor: 'John Lasseter, Lee Unkrich, Ash Brannon'}, // 3 diretores
  {filme: 'Divertida Mente', ano: 2015, diretor: 'Pete Docter, Ronaldo Del Carmen'}, // 2 diretores
  {filme: '007 Contra Spectre', ano: 2015, diretor: 'Sam Mendes'},
  {filme: 'Rogue One: Uma História Star Wars', ano: 2016, diretor: 'Gareth Edwards'},
  {filme: 'John Wick: Um Novo Dia Para Matar', ano: 2017, diretor: 'Chad Stahelski'},
  {filme: 'Thor Ragnarok', ano: 2017, diretor: 'Taika Waititi'},
  {filme: 'Jojo Rabbit', ano: 2019, diretor: 'Taika Waititi'},
  {filme: 'Resgate', ano: 2020, diretor: 'Sam Hargrave'},
  {filme: 'Morangos Silvestres', ano: 1957, diretor: 'Ingmar Bergman'},
  {filme: 'Fahrenheit 451', ano: 1966, diretor: 'François Truffaut'},
  {filme: 'Último Tango em Paris', ano: 1972, diretor: 'Bernardo Bertolucci'},
  {filme: 'Fitzcarraldo', ano: 1982, diretor: 'Werner Herzog'},
  {filme: 'Agentes do Destino, Os', ano: 2011, diretor: 'George Nolfi'},
  {filme: '10 Coisas que Eu Odeio em Você', ano: 1999, diretor: 'Gil Junger'},
  {filme: 'Batman: O Cavaleiro das Trevas', ano: 2008, diretor: 'Christopher Nolan'},
  {filme: 'Valente', ano: 2012, diretor: 'Mark Andrews, Brenda Chapman'},
  {filme: 'De Olhos Bem Fechados', ano: 1999, diretor: 'Stanley Kubrick'},
  {filme: 'Snatch: Porcos e Diamantes', ano: 2000, diretor: 'Guy Ritchie'},
  {filme: 'Doze Homens e Outro Segredo', ano: 2004, diretor: 'Steven Soderbergh'},
  {filme: 'Romance', ano: 2008, diretor: 'Guel Arraes'},
  {filme: 'Quarto do Pânico, O', ano: 2002, diretor: 'David Fincher'},
  {filme: 'Homem de Aço, O', ano: 2013, diretor: 'Zack Snyder'},
  {filme: '007 Operação Skyfall', ano: 2012, diretor: 'Sam Mendes'},
  {filme: 'Colateral', ano: 2004, diretor: 'Michael Mann'},
  {filme: 'Vingadores - The Avengers, Os', ano: 2012, diretor: 'Joss Whedon'},
  {filme: 'Deadpool 2', ano: 2018, diretor: 'David Leitch'},
  {filme: 'Rambo 3', ano: 1988, diretor: 'Peter MacDonald'},
  {filme: 'Estranho no Ninho, Um', ano: 1975, diretor: 'Milos Forman'},
  {filme: 'Pequena Miss Sunshine', ano: 2006, diretor: 'Jonathan Dayton, Valerie Faris'},
  {filme: 'Guardiões da Galáxia', ano: 2014, diretor: 'James Gunn'},
  {filme: 'Não Estou Lá', ano: 2007, diretor: 'Todd Haynes'},
  {filme: 'Honra & Coragem – As Quatro Plumas', ano: 2002, diretor: 'Shekhar Kapur'},
  {filme: 'Caçadores de Emoção', ano: 1991, diretor: 'Kathryn Bigelow'},
  {filme: 'Ultimato Bourne, O', ano: 2007, diretor: 'Paul Greengrass'},
  {filme: 'Coração Valente', ano: 1995, diretor: 'Mel Gibson'},
  {filme: 'Star Wars Episódio VIII: Os Últimos Jedi', ano: 2017, diretor: 'Rian Johnson'},
  {filme: 'Django', ano: 2012, diretor: 'Quentin Tarantino'},
  {filme: 'Scott Pilgrim Contra o Mundo', ano: 2010, diretor: 'Edgar Wright'},
  {filme: 'Feitiço do Tempo', ano: 1993, diretor: 'Harold Ramis'},
  {filme: 'Onze Homens e um Segredo', ano: 2001, diretor: 'Steven Soderbergh'},
  {filme: 'Inimigos Públicos', ano: 2009, diretor: 'Michael Mann'},
  {filme: 'Liga da Justiça', ano: 2017, diretor: 'Zack Snyder'},
  {filme: 'Asas do Desejo', ano: 1987, diretor: 'Wim Wenders'},
  {filme: '007 Cassino Royale', ano: 2006, diretor: 'Martin Campbell'},
  {filme: 'Closer', ano: 2004, diretor: 'Mike Nichols'},
  {filme: 'Transformers', ano: 2007, diretor: 'Michael Bay'},
  {filme: 'Falcão Negro em Perigo', ano: 2001, diretor: 'Ridley Scott'},
  {filme: 'Rambo 2: A Missão', ano: 1985, diretor: 'George Pan Cosmatos'},
  {filme: 'Identidade Bourne, A', ano: 2002, diretor: 'Doug Liman'},
  {filme: 'Orgulho e Preconceito', ano: 2005, diretor: 'Joe Wright'},
  {filme: 'Kill Bill: Volume 2', ano: 2004, diretor: 'Quentin Tarantino'},
  {filme: 'Mad Max: Estrada da Fúria', ano: 2015, diretor: 'George Miller'},
  {filme: 'Atômica', ano: 2017, diretor: 'David Leitch'},
  {filme: 'Wolverine: Imortal', ano: 2013, diretor: 'James Mangold'},
  {filme: 'Coração de Cavaleiro', ano: 2001, diretor: 'Brian Helgeland'},
  {filme: 'Toy Story 3', ano: 2010, diretor: 'Lee Unkrich'},
  {filme: 'Grande Truque, O', ano: 2006, diretor: 'Christopher Nolan'},
  {filme: 'Protegendo o Inimigo', ano: 2012, diretor: 'Daniel Espinosa'},
  {filme: 'Infiltrados, Os', ano: 2006, diretor: 'Martin Scorsese'},
  {filme: 'Mulher-Maravilha', ano: 2017, diretor: 'Patty Jenkins'},
  {filme: 'Lugar Chamado Notting Hill, Um', ano: 1999, diretor: 'Roger Mitchell'},
  {filme: 'Lembranças', ano: 2010, diretor: 'Allen Coulter'},
  {filme: 'Aventureiros do Bairro Proibido, Os', ano: 1986, diretor: 'John Carpenter'},
  {filme: 'Watchmen: O Filme', ano: 2009, diretor: 'Zack Snyder'},
  {filme: 'De Volta para o Furuto II', ano: 1989, diretor: 'Robert Zemeckis'},
  {filme: 'Sobre Meninos e Lobos', ano: 2003, diretor: 'Clint Eastwood'},
  {filme: 'Guia do Mochileiro das Galáxias, O', ano: 2005, diretor: 'Garth Jennings'},
  {filme: 'Piratas do Caribe: A Maldição do Pérola Negra', ano: 2003, diretor: 'Gore Verbinski'},
  {filme: 'Kick-Ass: Quebrando Tudo', ano: 2010, diretor: 'Matthew Vaughn'},
  {filme: 'Menina de Ouro', ano: 2004, diretor: 'Clint Eastwood'},
  {filme: 'Bastardos Inglórios', ano: 2009, diretor: 'Quentin Tarantino'},
  {filme: 'Wall-E', ano: 2008, diretor: 'Andrew Stanton'},
  {filme: 'Batman Vs. Superman: A Origem da Justiça', ano: 2016, diretor: 'Zack Snyder'},
  {filme: 'Vingadores: Ultimato', ano: 2019, diretor: 'Anthony Russo, Joe Russo'},
  {filme: 'Doutor Estranho', ano: 2016, diretor: 'Scott Derrickson'},
  {filme: 'Romeu e Julieta', ano: 1996, diretor: 'Baz Luhrmann'},
  {filme: 'Imperdoáveis, Os', ano: 1992, diretor: 'Clint Eastwood'},
  {filme: 'Obrigado por Fumar', ano: 2005, diretor: 'Jason Reitman'},
  {filme: 'Lugar Silencioso, Um', ano: 2018, diretor: 'John Krasinski'},
  {filme: 'Batman: O Cavaleiro das Trevas Ressurge', ano: 2012, diretor: 'Christopher Nolan'},
  {filme: 'Vingadores: Era de Ultron', ano: 2015, diretor: 'Joss Whedon'},
  {filme: 'Eu Sou a Lenda', ano: 2007, diretor: 'Francis Lawrence'},
  {filme: 'Cão de Briga', ano: 2005, diretor: 'Louis Leterrier'},
  {filme: 'Up: Altas Aventuras', ano: 2009, diretor: 'Pete Docter'},
  {filme: 'Gladiador', ano: 2000, diretor: 'Ridley Scott'},
  {filme: 'Rambo: Programado para Matar', ano: 1982, diretor: 'Ted Kotcheff'},
  {filme: 'Juno', ano: 2007, diretor: 'Jason Reitman'},
  {filme: 'Monstros S.A.', ano: 2001, diretor: 'Peter Docter, David Silverman, Lee Unkrich'},
  {filme: 'Capitão América: Guerra Civil', ano: 2016, diretor: 'Anthony Russo, Joe Russo'},
  {filme: 'Último dos Moicanos, O', ano: 1992, diretor: 'Michael Mann'},
  {filme: 'Guardiões da Galáxia Vol. 2', ano: 2017, diretor: 'James Gunn'},
  {filme: 'Quase Famosos', ano: 2000, diretor: 'Cameron Crowe'},
  {filme: 'Capitão América: O Soldado Invernal', ano: 2014, diretor: 'Anthony Russo, Joe Russo'},
  {filme: 'True Lies', ano: 1994, diretor: 'James Cameron'},
  {filme: 'Homem-Aranha: De Volta ao Lar', ano: 2017, diretor: 'Jon Watts'},
  {filme: 'Parto de Viagem, Um', ano: 2010, diretor: 'Todd Phillips'},
  {filme: 'Matrix', ano: 1999, diretor: 'Lana Wachowski, Lilly Wachowski'},
  {filme: 'Três Reis', ano: 1999, diretor: 'David O. Russell'},
  {filme: 'Cisne Negro', ano: 2010, diretor: 'Darren Aronofsky'},
  {filme: 'Homem-Formiga', ano: 2015, diretor: 'Peyton Reed'},
  {filme: 'Mensagem para Você', ano: 1998, diretor: 'Nora Ephron'},
  {filme: 'Rei Arthur: A Lenda da Espada', ano: 2017, diretor: 'Guy Ritchie'},
  {filme: 'Como Treinar o Seu Dragão', ano: 2010, diretor: 'Dean DeBlois, Chris Sanders'},
  {filme: 'John Wick: De Volta ao Jogo', ano: 2014, diretor: 'Chad Stahelski, David Leitch'},
  {filme: 'Pantera Negra', ano: 2018, diretor: 'Ryan Coogler'},
  {filme: 'Toy Story 4', ano: 2019, diretor: 'Josh Cooley'},
  {filme: 'Noite Americana, A', ano: 1973, diretor: 'François Truffaut'},
  {filme: 'Incompreendidos, Os', ano: 1959, diretor: 'François Truffaut'},
  {filme: 'Corte, O', ano: 2005, diretor: 'Costa-Gavras'},
  {filme: 'John Wick 3: Parabellum', ano: 2019, diretor: 'Chad Stahelski'},
  {filme: 'Piratas do Caribe 2: O Baú da Morte', ano: 2006, diretor: 'Gore Verbinski'},
  {filme: 'Star Wars Episódio IX: A Ascensão Skywalker', ano: 2019, diretor: 'J. J. Abrams'},
  {filme: 'Deadpool', ano: 2016, diretor: 'Tim Miller'},
  {filme: 'Logan', ano: 2017, diretor: 'James Mangold'},
  {filme: 'Encontros e Desencontros', ano: 2003, diretor: 'Sofia Coppola'},
  {filme: 'Na Natureza Selvagem', ano: 2007, diretor: 'Sean Penn'},
  {filme: 'Fogo Contra Fogo', ano: 1995, diretor: 'Michael Mann'},
  {filme: 'Pacificador, O', ano: 1997, diretor: 'Mimi Leder'},
  {filme: 'Guerra ao Terror', ano: 2008, diretor: 'Kathryn Bigelow'},
  {filme: 'Procurando Nemo', ano: 2003, diretor: 'Andrew Stanton'},
  {filme: 'Homem de Ferro 2', ano: 2010, diretor: 'Jon Favreau'},
  {filme: 'Regresso, O', ano: 2015, diretor: 'Alejandro Gonzáles Iñárritu'},
  {filme: 'Diários de Motocicleta', ano: 2004, diretor: 'Walter Salles'},
  {filme: 'Incríveis, Os', ano: 2004, diretor: 'Brad Bird'},
  {filme: 'Kill Bill: Volume 1', ano: 2003, diretor: 'Quentin Tarantino'},
  {filme: 'Kingsman: Serviço Secreto', ano: 2014, diretor: 'Matthew Vaughn'},
  {filme: 'La La Land – Cantando Estações', ano: 2016, diretor: 'Damien Chazelle'},
  {filme: 'Moulin Rouge: Amor em Vermelho', ano: 2001, diretor: 'Baz Luhrmann'},
  {filme: 'Seven: Os 7 Crimes Capitais', ano: 1995, diretor: 'David Fincher'},
  {filme: 'Shame', ano: 2011, diretor: 'Steve McQueen'}
]

// Exibir a quantidade de filmes:
document.getElementById('total-filmes').innerHTML = filmes.length;

// Exibir em ordem alfabética:
exibirFilmes();

function alfa() {
  filmes.sort(function(a, b){
    let x = a.filme.toLowerCase();
    let y = b.filme.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  exibirFilmes();
};

// Exibir em ordem cronológica:
exibirFilmes();
  
function cron() {
  filmes.sort(function(a, b) {return a.ano - b.ano});
  exibirFilmes()
};

function exibirFilmes() {
  let texto = '';
  document.getElementById('items-lista').innerHTML = 
  texto += `<p> <strong>${filmes[0].filme}</strong> (${filmes[0].ano}) <br> ${filmes[0].diretor} </p>` +
  `<p> <strong>${filmes[1].filme}</strong> (${filmes[1].ano}) <br> ${filmes[1].diretor} </p>` +
  `<p> <strong>${filmes[2].filme}</strong> (${filmes[2].ano}) <br> ${filmes[2].diretor} </p>` +
  `<p> <strong>${filmes[3].filme}</strong> (${filmes[3].ano}) <br> ${filmes[3].diretor} </p>` +
  `<p> <strong>${filmes[4].filme}</strong> (${filmes[4].ano}) <br> ${filmes[4].diretor} </p>` +
  `<p> <strong>${filmes[5].filme}</strong> (${filmes[5].ano}) <br> ${filmes[5].diretor} </p>` +
  `<p> <strong>${filmes[6].filme}</strong> (${filmes[6].ano}) <br> ${filmes[6].diretor} </p>` +
  `<p> <strong>${filmes[7].filme}</strong> (${filmes[7].ano}) <br> ${filmes[7].diretor} </p>` +
  `<p> <strong>${filmes[8].filme}</strong> (${filmes[8].ano}) <br> ${filmes[8].diretor} </p>` +
  `<p> <strong>${filmes[9].filme}</strong> (${filmes[9].ano}) <br> ${filmes[9].diretor} </p>` +
  `<p> <strong>${filmes[10].filme}</strong> (${filmes[10].ano}) <br> ${filmes[10].diretor} </p>` +
  `<p> <strong>${filmes[11].filme}</strong> (${filmes[11].ano}) <br> ${filmes[11].diretor} </p>` +
  `<p> <strong>${filmes[12].filme}</strong> (${filmes[12].ano}) <br> ${filmes[12].diretor} </p>` +
  `<p> <strong>${filmes[13].filme}</strong> (${filmes[13].ano}) <br> ${filmes[13].diretor} </p>` +
  `<p> <strong>${filmes[14].filme}</strong> (${filmes[14].ano}) <br> ${filmes[14].diretor} </p>` +
  `<p> <strong>${filmes[15].filme}</strong> (${filmes[15].ano}) <br> ${filmes[15].diretor} </p>` +
  `<p> <strong>${filmes[16].filme}</strong> (${filmes[16].ano}) <br> ${filmes[16].diretor} </p>` +
  `<p> <strong>${filmes[17].filme}</strong> (${filmes[17].ano}) <br> ${filmes[17].diretor} </p>` +
  `<p> <strong>${filmes[18].filme}</strong> (${filmes[18].ano}) <br> ${filmes[18].diretor} </p>` +
  `<p> <strong>${filmes[19].filme}</strong> (${filmes[19].ano}) <br> ${filmes[19].diretor} </p>` +
  `<p> <strong>${filmes[20].filme}</strong> (${filmes[20].ano}) <br> ${filmes[20].diretor} </p>` +
  `<p> <strong>${filmes[21].filme}</strong> (${filmes[21].ano}) <br> ${filmes[21].diretor} </p>` +
  `<p> <strong>${filmes[22].filme}</strong> (${filmes[22].ano}) <br> ${filmes[22].diretor} </p>` +
  `<p> <strong>${filmes[23].filme}</strong> (${filmes[23].ano}) <br> ${filmes[23].diretor} </p>` +
  `<p> <strong>${filmes[24].filme}</strong> (${filmes[24].ano}) <br> ${filmes[24].diretor} </p>` +
  `<p> <strong>${filmes[25].filme}</strong> (${filmes[25].ano}) <br> ${filmes[25].diretor} </p>` +
  `<p> <strong>${filmes[26].filme}</strong> (${filmes[26].ano}) <br> ${filmes[26].diretor} </p>` +
  `<p> <strong>${filmes[27].filme}</strong> (${filmes[27].ano}) <br> ${filmes[27].diretor} </p>` +
  `<p> <strong>${filmes[28].filme}</strong> (${filmes[28].ano}) <br> ${filmes[28].diretor} </p>` +
  `<p> <strong>${filmes[29].filme}</strong> (${filmes[29].ano}) <br> ${filmes[29].diretor} </p>` +
  `<p> <strong>${filmes[30].filme}</strong> (${filmes[30].ano}) <br> ${filmes[30].diretor} </p>` +
  `<p> <strong>${filmes[31].filme}</strong> (${filmes[31].ano}) <br> ${filmes[31].diretor} </p>` +
  `<p> <strong>${filmes[32].filme}</strong> (${filmes[32].ano}) <br> ${filmes[32].diretor} </p>` +
  `<p> <strong>${filmes[33].filme}</strong> (${filmes[33].ano}) <br> ${filmes[33].diretor} </p>` +
  `<p> <strong>${filmes[34].filme}</strong> (${filmes[34].ano}) <br> ${filmes[34].diretor} </p>` +
  `<p> <strong>${filmes[35].filme}</strong> (${filmes[35].ano}) <br> ${filmes[35].diretor} </p>` +
  `<p> <strong>${filmes[36].filme}</strong> (${filmes[36].ano}) <br> ${filmes[36].diretor} </p>` +
  `<p> <strong>${filmes[37].filme}</strong> (${filmes[37].ano}) <br> ${filmes[37].diretor} </p>` +
  `<p> <strong>${filmes[38].filme}</strong> (${filmes[38].ano}) <br> ${filmes[38].diretor} </p>` +
  `<p> <strong>${filmes[39].filme}</strong> (${filmes[39].ano}) <br> ${filmes[39].diretor} </p>` +
  `<p> <strong>${filmes[40].filme}</strong> (${filmes[40].ano}) <br> ${filmes[40].diretor} </p>` +
  `<p> <strong>${filmes[41].filme}</strong> (${filmes[41].ano}) <br> ${filmes[41].diretor} </p>` +
  `<p> <strong>${filmes[42].filme}</strong> (${filmes[42].ano}) <br> ${filmes[42].diretor} </p>` +
  `<p> <strong>${filmes[43].filme}</strong> (${filmes[43].ano}) <br> ${filmes[43].diretor} </p>` +
  `<p> <strong>${filmes[44].filme}</strong> (${filmes[44].ano}) <br> ${filmes[44].diretor} </p>` +
  `<p> <strong>${filmes[45].filme}</strong> (${filmes[45].ano}) <br> ${filmes[45].diretor} </p>` +
  `<p> <strong>${filmes[46].filme}</strong> (${filmes[46].ano}) <br> ${filmes[46].diretor} </p>` +
  `<p> <strong>${filmes[47].filme}</strong> (${filmes[47].ano}) <br> ${filmes[47].diretor} </p>` +
  `<p> <strong>${filmes[48].filme}</strong> (${filmes[48].ano}) <br> ${filmes[48].diretor} </p>` +
  `<p> <strong>${filmes[49].filme}</strong> (${filmes[49].ano}) <br> ${filmes[49].diretor} </p>` +
  `<p> <strong>${filmes[50].filme}</strong> (${filmes[50].ano}) <br> ${filmes[50].diretor} </p>` +
  `<p> <strong>${filmes[51].filme}</strong> (${filmes[51].ano}) <br> ${filmes[51].diretor} </p>` +
  `<p> <strong>${filmes[52].filme}</strong> (${filmes[52].ano}) <br> ${filmes[52].diretor} </p>` +
  `<p> <strong>${filmes[53].filme}</strong> (${filmes[53].ano}) <br> ${filmes[53].diretor} </p>` +
  `<p> <strong>${filmes[54].filme}</strong> (${filmes[54].ano}) <br> ${filmes[54].diretor} </p>` +
  `<p> <strong>${filmes[55].filme}</strong> (${filmes[55].ano}) <br> ${filmes[55].diretor} </p>` +
  `<p> <strong>${filmes[56].filme}</strong> (${filmes[56].ano}) <br> ${filmes[56].diretor} </p>` +
  `<p> <strong>${filmes[57].filme}</strong> (${filmes[57].ano}) <br> ${filmes[57].diretor} </p>` +
  `<p> <strong>${filmes[58].filme}</strong> (${filmes[58].ano}) <br> ${filmes[58].diretor} </p>` +
  `<p> <strong>${filmes[59].filme}</strong> (${filmes[59].ano}) <br> ${filmes[59].diretor} </p>` +
  `<p> <strong>${filmes[60].filme}</strong> (${filmes[60].ano}) <br> ${filmes[60].diretor} </p>` +
  `<p> <strong>${filmes[61].filme}</strong> (${filmes[61].ano}) <br> ${filmes[61].diretor} </p>` +
  `<p> <strong>${filmes[62].filme}</strong> (${filmes[62].ano}) <br> ${filmes[62].diretor} </p>` +
  `<p> <strong>${filmes[63].filme}</strong> (${filmes[63].ano}) <br> ${filmes[63].diretor} </p>` +
  `<p> <strong>${filmes[64].filme}</strong> (${filmes[64].ano}) <br> ${filmes[64].diretor} </p>` +
  `<p> <strong>${filmes[65].filme}</strong> (${filmes[65].ano}) <br> ${filmes[65].diretor} </p>` +
  `<p> <strong>${filmes[66].filme}</strong> (${filmes[66].ano}) <br> ${filmes[66].diretor} </p>` +
  `<p> <strong>${filmes[67].filme}</strong> (${filmes[67].ano}) <br> ${filmes[67].diretor} </p>` +
  `<p> <strong>${filmes[68].filme}</strong> (${filmes[68].ano}) <br> ${filmes[68].diretor} </p>` +
  `<p> <strong>${filmes[69].filme}</strong> (${filmes[69].ano}) <br> ${filmes[69].diretor} </p>` +
  `<p> <strong>${filmes[70].filme}</strong> (${filmes[70].ano}) <br> ${filmes[70].diretor} </p>` +
  `<p> <strong>${filmes[71].filme}</strong> (${filmes[71].ano}) <br> ${filmes[71].diretor} </p>` +
  `<p> <strong>${filmes[72].filme}</strong> (${filmes[72].ano}) <br> ${filmes[72].diretor} </p>` +
  `<p> <strong>${filmes[73].filme}</strong> (${filmes[73].ano}) <br> ${filmes[73].diretor} </p>` +
  `<p> <strong>${filmes[74].filme}</strong> (${filmes[74].ano}) <br> ${filmes[74].diretor} </p>` +
  `<p> <strong>${filmes[75].filme}</strong> (${filmes[75].ano}) <br> ${filmes[75].diretor} </p>` +
  `<p> <strong>${filmes[76].filme}</strong> (${filmes[76].ano}) <br> ${filmes[76].diretor} </p>` +
  `<p> <strong>${filmes[77].filme}</strong> (${filmes[77].ano}) <br> ${filmes[77].diretor} </p>` +
  `<p> <strong>${filmes[78].filme}</strong> (${filmes[78].ano}) <br> ${filmes[78].diretor} </p>` +
  `<p> <strong>${filmes[79].filme}</strong> (${filmes[79].ano}) <br> ${filmes[79].diretor} </p>` +
  `<p> <strong>${filmes[80].filme}</strong> (${filmes[80].ano}) <br> ${filmes[80].diretor} </p>` +
  `<p> <strong>${filmes[81].filme}</strong> (${filmes[81].ano}) <br> ${filmes[81].diretor} </p>` +
  `<p> <strong>${filmes[82].filme}</strong> (${filmes[82].ano}) <br> ${filmes[82].diretor} </p>` +
  `<p> <strong>${filmes[83].filme}</strong> (${filmes[83].ano}) <br> ${filmes[83].diretor} </p>` +
  `<p> <strong>${filmes[84].filme}</strong> (${filmes[84].ano}) <br> ${filmes[84].diretor} </p>` +
  `<p> <strong>${filmes[85].filme}</strong> (${filmes[85].ano}) <br> ${filmes[85].diretor} </p>` +
  `<p> <strong>${filmes[86].filme}</strong> (${filmes[86].ano}) <br> ${filmes[86].diretor} </p>` +
  `<p> <strong>${filmes[87].filme}</strong> (${filmes[87].ano}) <br> ${filmes[87].diretor} </p>` +
  `<p> <strong>${filmes[88].filme}</strong> (${filmes[88].ano}) <br> ${filmes[88].diretor} </p>` +
  `<p> <strong>${filmes[89].filme}</strong> (${filmes[89].ano}) <br> ${filmes[89].diretor} </p>` +
  `<p> <strong>${filmes[90].filme}</strong> (${filmes[90].ano}) <br> ${filmes[90].diretor} </p>` +
  `<p> <strong>${filmes[91].filme}</strong> (${filmes[91].ano}) <br> ${filmes[91].diretor} </p>` +
  `<p> <strong>${filmes[92].filme}</strong> (${filmes[92].ano}) <br> ${filmes[92].diretor} </p>` +
  `<p> <strong>${filmes[93].filme}</strong> (${filmes[93].ano}) <br> ${filmes[93].diretor} </p>` +
  `<p> <strong>${filmes[94].filme}</strong> (${filmes[94].ano}) <br> ${filmes[94].diretor} </p>` +
  `<p> <strong>${filmes[95].filme}</strong> (${filmes[95].ano}) <br> ${filmes[95].diretor} </p>` +
  `<p> <strong>${filmes[96].filme}</strong> (${filmes[96].ano}) <br> ${filmes[96].diretor} </p>` +
  `<p> <strong>${filmes[97].filme}</strong> (${filmes[97].ano}) <br> ${filmes[97].diretor} </p>` +
  `<p> <strong>${filmes[98].filme}</strong> (${filmes[98].ano}) <br> ${filmes[98].diretor} </p>` +
  `<p> <strong>${filmes[99].filme}</strong> (${filmes[99].ano}) <br> ${filmes[99].diretor} </p>` +
  `<p> <strong>${filmes[100].filme}</strong> (${filmes[100].ano}) <br> ${filmes[100].diretor} </p>` +
  `<p> <strong>${filmes[101].filme}</strong> (${filmes[101].ano}) <br> ${filmes[101].diretor} </p>` +
  `<p> <strong>${filmes[102].filme}</strong> (${filmes[102].ano}) <br> ${filmes[102].diretor} </p>` +
  `<p> <strong>${filmes[103].filme}</strong> (${filmes[103].ano}) <br> ${filmes[103].diretor} </p>` +
  `<p> <strong>${filmes[104].filme}</strong> (${filmes[104].ano}) <br> ${filmes[104].diretor} </p>` +
  `<p> <strong>${filmes[105].filme}</strong> (${filmes[105].ano}) <br> ${filmes[105].diretor} </p>` +
  `<p> <strong>${filmes[106].filme}</strong> (${filmes[106].ano}) <br> ${filmes[106].diretor} </p>` +
  `<p> <strong>${filmes[107].filme}</strong> (${filmes[107].ano}) <br> ${filmes[107].diretor} </p>` +
  `<p> <strong>${filmes[108].filme}</strong> (${filmes[108].ano}) <br> ${filmes[108].diretor} </p>` +
  `<p> <strong>${filmes[109].filme}</strong> (${filmes[109].ano}) <br> ${filmes[109].diretor} </p>` +
  `<p> <strong>${filmes[110].filme}</strong> (${filmes[110].ano}) <br> ${filmes[110].diretor} </p>` +
  `<p> <strong>${filmes[111].filme}</strong> (${filmes[111].ano}) <br> ${filmes[111].diretor} </p>` +
  `<p> <strong>${filmes[112].filme}</strong> (${filmes[112].ano}) <br> ${filmes[112].diretor} </p>` +
  `<p> <strong>${filmes[113].filme}</strong> (${filmes[113].ano}) <br> ${filmes[113].diretor} </p>` +
  `<p> <strong>${filmes[114].filme}</strong> (${filmes[114].ano}) <br> ${filmes[114].diretor} </p>` +
  `<p> <strong>${filmes[115].filme}</strong> (${filmes[115].ano}) <br> ${filmes[115].diretor} </p>` +
  `<p> <strong>${filmes[116].filme}</strong> (${filmes[116].ano}) <br> ${filmes[116].diretor} </p>` +
  `<p> <strong>${filmes[117].filme}</strong> (${filmes[117].ano}) <br> ${filmes[117].diretor} </p>` +
  `<p> <strong>${filmes[118].filme}</strong> (${filmes[118].ano}) <br> ${filmes[118].diretor} </p>` +
  `<p> <strong>${filmes[119].filme}</strong> (${filmes[119].ano}) <br> ${filmes[119].diretor} </p>` +
  `<p> <strong>${filmes[120].filme}</strong> (${filmes[120].ano}) <br> ${filmes[120].diretor} </p>` +
  `<p> <strong>${filmes[121].filme}</strong> (${filmes[121].ano}) <br> ${filmes[121].diretor} </p>` +
  `<p> <strong>${filmes[122].filme}</strong> (${filmes[122].ano}) <br> ${filmes[122].diretor} </p>` +
  `<p> <strong>${filmes[123].filme}</strong> (${filmes[123].ano}) <br> ${filmes[123].diretor} </p>` +
  `<p> <strong>${filmes[124].filme}</strong> (${filmes[124].ano}) <br> ${filmes[124].diretor} </p>` +
  `<p> <strong>${filmes[125].filme}</strong> (${filmes[125].ano}) <br> ${filmes[125].diretor} </p>` +
  `<p> <strong>${filmes[126].filme}</strong> (${filmes[126].ano}) <br> ${filmes[126].diretor} </p>` +
  `<p> <strong>${filmes[127].filme}</strong> (${filmes[127].ano}) <br> ${filmes[127].diretor} </p>` +
  `<p> <strong>${filmes[128].filme}</strong> (${filmes[128].ano}) <br> ${filmes[128].diretor} </p>` +
  `<p> <strong>${filmes[129].filme}</strong> (${filmes[129].ano}) <br> ${filmes[129].diretor} </p>` +
  `<p> <strong>${filmes[130].filme}</strong> (${filmes[130].ano}) <br> ${filmes[130].diretor} </p>` +
  `<p> <strong>${filmes[131].filme}</strong> (${filmes[131].ano}) <br> ${filmes[131].diretor} </p>` +
  `<p> <strong>${filmes[132].filme}</strong> (${filmes[132].ano}) <br> ${filmes[132].diretor} </p>` +
  `<p> <strong>${filmes[133].filme}</strong> (${filmes[133].ano}) <br> ${filmes[133].diretor} </p>` +
  `<p> <strong>${filmes[134].filme}</strong> (${filmes[134].ano}) <br> ${filmes[134].diretor} </p>` +
  `<p> <strong>${filmes[135].filme}</strong> (${filmes[135].ano}) <br> ${filmes[135].diretor} </p>` +
  `<p> <strong>${filmes[136].filme}</strong> (${filmes[136].ano}) <br> ${filmes[136].diretor} </p>` +
  `<p> <strong>${filmes[137].filme}</strong> (${filmes[137].ano}) <br> ${filmes[137].diretor} </p>` +
  `<p> <strong>${filmes[138].filme}</strong> (${filmes[138].ano}) <br> ${filmes[138].diretor} </p>` +
  `<p> <strong>${filmes[139].filme}</strong> (${filmes[139].ano}) <br> ${filmes[139].diretor} </p>` +
  `<p> <strong>${filmes[140].filme}</strong> (${filmes[140].ano}) <br> ${filmes[140].diretor} </p>` +
  `<p> <strong>${filmes[141].filme}</strong> (${filmes[141].ano}) <br> ${filmes[141].diretor} </p>` +
  `<p> <strong>${filmes[142].filme}</strong> (${filmes[142].ano}) <br> ${filmes[142].diretor} </p>` +
  `<p> <strong>${filmes[143].filme}</strong> (${filmes[143].ano}) <br> ${filmes[143].diretor} </p>` +
  `<p> <strong>${filmes[144].filme}</strong> (${filmes[144].ano}) <br> ${filmes[144].diretor} </p>` +
  `<p> <strong>${filmes[145].filme}</strong> (${filmes[145].ano}) <br> ${filmes[145].diretor} </p>` +
  `<p> <strong>${filmes[146].filme}</strong> (${filmes[146].ano}) <br> ${filmes[146].diretor} </p>` +
  `<p> <strong>${filmes[147].filme}</strong> (${filmes[147].ano}) <br> ${filmes[147].diretor} </p>` +
  `<p> <strong>${filmes[148].filme}</strong> (${filmes[148].ano}) <br> ${filmes[148].diretor} </p>` +
  `<p> <strong>${filmes[149].filme}</strong> (${filmes[149].ano}) <br> ${filmes[149].diretor} </p>` +
  `<p> <strong>${filmes[150].filme}</strong> (${filmes[150].ano}) <br> ${filmes[150].diretor} </p>` +
  `<p> <strong>${filmes[151].filme}</strong> (${filmes[151].ano}) <br> ${filmes[151].diretor} </p>` +
  `<p> <strong>${filmes[152].filme}</strong> (${filmes[152].ano}) <br> ${filmes[152].diretor} </p>` +
  `<p> <strong>${filmes[153].filme}</strong> (${filmes[153].ano}) <br> ${filmes[153].diretor} </p>` +
  `<p> <strong>${filmes[154].filme}</strong> (${filmes[154].ano}) <br> ${filmes[154].diretor} </p>` +
  `<p> <strong>${filmes[155].filme}</strong> (${filmes[155].ano}) <br> ${filmes[155].diretor} </p>` +
  `<p> <strong>${filmes[156].filme}</strong> (${filmes[156].ano}) <br> ${filmes[156].diretor} </p>` +
  `<p> <strong>${filmes[157].filme}</strong> (${filmes[157].ano}) <br> ${filmes[157].diretor} </p>` +
  `<p> <strong>${filmes[158].filme}</strong> (${filmes[158].ano}) <br> ${filmes[158].diretor} </p>` +
  `<p> <strong>${filmes[159].filme}</strong> (${filmes[159].ano}) <br> ${filmes[159].diretor} </p>` +
  `<p> <strong>${filmes[160].filme}</strong> (${filmes[160].ano}) <br> ${filmes[160].diretor} </p>` +
  `<p> <strong>${filmes[161].filme}</strong> (${filmes[161].ano}) <br> ${filmes[161].diretor} </p>` +
  `<p> <strong>${filmes[162].filme}</strong> (${filmes[162].ano}) <br> ${filmes[162].diretor} </p>` +
  `<p> <strong>${filmes[163].filme}</strong> (${filmes[163].ano}) <br> ${filmes[163].diretor} </p>` +
  `<p> <strong>${filmes[164].filme}</strong> (${filmes[164].ano}) <br> ${filmes[164].diretor} </p>` +
  `<p> <strong>${filmes[165].filme}</strong> (${filmes[165].ano}) <br> ${filmes[165].diretor} </p>` +
  `<p> <strong>${filmes[166].filme}</strong> (${filmes[166].ano}) <br> ${filmes[166].diretor} </p>` +
  `<p> <strong>${filmes[167].filme}</strong> (${filmes[167].ano}) <br> ${filmes[167].diretor} </p>` +
  `<p> <strong>${filmes[168].filme}</strong> (${filmes[168].ano}) <br> ${filmes[168].diretor} </p>` +
  `<p> <strong>${filmes[169].filme}</strong> (${filmes[169].ano}) <br> ${filmes[169].diretor} </p>` +
  `<p> <strong>${filmes[170].filme}</strong> (${filmes[170].ano}) <br> ${filmes[170].diretor} </p>` +
  `<p> <strong>${filmes[171].filme}</strong> (${filmes[171].ano}) <br> ${filmes[171].diretor} </p>` +
  `<p> <strong>${filmes[172].filme}</strong> (${filmes[172].ano}) <br> ${filmes[172].diretor} </p>` +
  `<p> <strong>${filmes[173].filme}</strong> (${filmes[173].ano}) <br> ${filmes[173].diretor} </p>` +
  `<p> <strong>${filmes[174].filme}</strong> (${filmes[174].ano}) <br> ${filmes[174].diretor} </p>` +
  `<p> <strong>${filmes[175].filme}</strong> (${filmes[175].ano}) <br> ${filmes[175].diretor} </p>` +
  `<p> <strong>${filmes[176].filme}</strong> (${filmes[176].ano}) <br> ${filmes[176].diretor} </p>` +
  `<p> <strong>${filmes[177].filme}</strong> (${filmes[177].ano}) <br> ${filmes[177].diretor} </p>` +
  `<p> <strong>${filmes[178].filme}</strong> (${filmes[178].ano}) <br> ${filmes[178].diretor} </p>` +
  `<p> <strong>${filmes[179].filme}</strong> (${filmes[179].ano}) <br> ${filmes[179].diretor} </p>` +
  `<p> <strong>${filmes[180].filme}</strong> (${filmes[180].ano}) <br> ${filmes[180].diretor} </p>` +
  `<p> <strong>${filmes[181].filme}</strong> (${filmes[181].ano}) <br> ${filmes[181].diretor} </p>` +
  `<p> <strong>${filmes[182].filme}</strong> (${filmes[182].ano}) <br> ${filmes[182].diretor} </p>` +
  `<p> <strong>${filmes[183].filme}</strong> (${filmes[183].ano}) <br> ${filmes[183].diretor} </p>` +
  `<p> <strong>${filmes[184].filme}</strong> (${filmes[184].ano}) <br> ${filmes[184].diretor} </p>` +
  `<p> <strong>${filmes[185].filme}</strong> (${filmes[185].ano}) <br> ${filmes[185].diretor} </p>` +
  `<p> <strong>${filmes[186].filme}</strong> (${filmes[186].ano}) <br> ${filmes[186].diretor} </p>` +
  `<p> <strong>${filmes[187].filme}</strong> (${filmes[187].ano}) <br> ${filmes[187].diretor} </p>` +
  `<p> <strong>${filmes[188].filme}</strong> (${filmes[188].ano}) <br> ${filmes[188].diretor} </p>` +
  `<p> <strong>${filmes[189].filme}</strong> (${filmes[189].ano}) <br> ${filmes[189].diretor} </p>` +
  `<p> <strong>${filmes[190].filme}</strong> (${filmes[190].ano}) <br> ${filmes[190].diretor} </p>` +
  `<p> <strong>${filmes[191].filme}</strong> (${filmes[191].ano}) <br> ${filmes[191].diretor} </p>` +
  `<p> <strong>${filmes[192].filme}</strong> (${filmes[192].ano}) <br> ${filmes[192].diretor} </p>` +
  `<p> <strong>${filmes[193].filme}</strong> (${filmes[193].ano}) <br> ${filmes[193].diretor} </p>` +
  `<p> <strong>${filmes[194].filme}</strong> (${filmes[194].ano}) <br> ${filmes[194].diretor} </p>` +
  `<p> <strong>${filmes[195].filme}</strong> (${filmes[195].ano}) <br> ${filmes[195].diretor} </p>` +
  `<p> <strong>${filmes[196].filme}</strong> (${filmes[196].ano}) <br> ${filmes[196].diretor} </p>` +
  `<p> <strong>${filmes[197].filme}</strong> (${filmes[197].ano}) <br> ${filmes[197].diretor} </p>` +
  `<p> <strong>${filmes[198].filme}</strong> (${filmes[198].ano}) <br> ${filmes[198].diretor} </p>`;
}