const filmes = [
  {filme: 'Na Mira do Chefe', ano: 2008, diretor: 'Martin McDonagh'},
  {filme: 'Candy', ano: 2005, diretor: 'Neil Armfield'},
  {filme: 'Clube da Luta', ano: 1999, diretor: 'David Fincher'},
  {filme: '(500) Dias com Ela', ano: 2009, diretor: 'Marc Webb'},
  {filme: 'De Volta para o Futuro', ano: 1985, diretor: 'Robert Zemeckis'},
  {filme: 'Vingadores: Guerra Infinita', ano: 2018, diretor: 'Anthony Russo, Joe Russo'},
  {filme: 'Trovão Tropical', ano: 2008, diretor: 'Ben Stiller'},
  {filme: 'Eu, Tonya', ano: 2017, diretor: 'Craig Gillespie'},
  {filme: 'Gravidade', ano: 2013, diretor: 'Alfonso Cuarón'},
  {filme: 'Shrek 2', ano: 2004, diretor: 'Andrew Adamson, Kelly Asbury, Conrad Vernon'},
  {filme: 'Viagem à Lua', ano: 1902, diretor: 'Georges Méliès'},
  {filme: 'Adeus, Lenin!', ano: 2003, diretor: 'Wolfgang Becker'},
  {filme: 'Aconteceu Naquela Noite', ano: 1934, diretor: 'Frank Capra'},
  {filme: '300', ano: 2006, diretor: 'Zack Snyder'},
  {filme: 'Casablanca', ano: 1942, diretor: 'Michael Curtiz'},
  {filme: 'Viagem de Chihiro, A', ano: 2001, diretor: 'Hayao Miyazaki'},
  {filme: 'Cantando na Chuva', ano: 1952, diretor: 'Stanley Donen, Gene Kelly'},
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
  {filme: 'Matrix Revolution', ano: 2003, diretor: 'Lana Wachowski, Lilly Wachowski'},
  {filme: 'Dia de Treinamento', ano: 2001, diretor: 'Antoine Fuqua'},
  {filme: 'Senhor dos Anéis: A Sociedade do Anel, O', ano: 2001, diretor: 'Peter Jackson'},
  {filme: 'Efeito Borboleta', ano: 2004, diretor: 'Eric Bress, J. Mackye Gruber'},
  {filme: 'Chamas da Vingança', ano: 2004, diretor: 'Tony Scott'},
  {filme: 'Senhor dos Anéis: As Duas Torres, O', ano: 2002, diretor: 'Peter Jackson'},
  {filme: 'De Volta para o Futuro III', ano: 1990, diretor: 'Robert Zemeckis'},
  {filme: 'Spirit: O Corcel Indomável', ano: 2002, diretor: 'Lorna Cook, Kelly Asbury'}, 
  {filme: 'Quicksilver – O Prazer de Ganhar', ano: 1986, diretor: 'Tom Donnelly'},
  {filme: 'Matrix Reloaded', ano: 2003, diretor: 'Lana Wachowski, Lilly Wachowski'},
  {filme: 'Sonho de Liberdade, Um', ano: 1984, diretor: 'Frank Darabont'},
  {filme: 'Brilho Eterno de uma Mente sem Lembranças', ano: 2004, diretor: 'Michel Gondry'},
  {filme: 'Edukators', ano: 2004, diretor: 'Hans Weingartner'},
  {filme: 'Supremacia Bourne, A', ano: 2004, diretor: 'Paul Greengrass'},
  {filme: 'Shrek', ano: 2001, diretor: 'Andrew Adamson, Vicky Jenson'},
  {filme: 'Jardineiro Fiel, O', ano: 2005, diretor: 'Fernando Meirelles'},
  {filme: 'Fargo', ano: 1996, diretor: 'Joel Coen, Ethan Coen'},
  {filme: 'Labirinto do Fauno, O', ano: 2006, diretor: 'Guilhermo del Toro'},
  {filme: 'Assassinato de Jesse James pelo Covarde Robert Ford, O', ano: 2007, diretor: 'Andrew Dominik'},
  {filme: 'Onde os Fracos Não Têm Vez', ano: 2007, diretor: 'Joel Coen, Ethan Coen'},
  {filme: 'E aí, Meu Irmão, Cadê Você?', ano: 2000, diretor: 'Joel Coen, Ethan Coen'},
  {filme: 'Homem de Ferro', ano: 2008, diretor: 'Jon Favreau'},
  {filme: 'Beleza Americana', ano: 1999, diretor: 'Sam Mendes'},
  {filme: 'Ilha do Medo', ano: 2009, diretor: 'Martin Scorsese'},
  {filme: 'Atração Perigosa', ano: 2010, diretor: 'Ben Affleck'},
  {filme: 'Origem, A', ano: 2010, diretor: 'Christopher Nolan'},
  {filme: 'Intocáveis', ano: 2011, diretor: 'Olivier Nakache, Eric Toledano'},
  {filme: 'Fabuloso Destino de Amélie Poulain, O', ano: 2001, diretor: 'Jean-Pierre Jeunet'},
  {filme: 'Ted', ano: 2012, diretor: 'Seth MacFarlane'},
  {filme: 'Homem de Ferro 3', ano: 2013, diretor: 'Shane Black'},
  {filme: 'Toy Story 2', ano: 1999, diretor: 'John Lasseter, Lee Unkrich, Ash Brannon'},
  {filme: 'Divertida Mente', ano: 2015, diretor: 'Pete Docter, Ronaldo Del Carmen'},
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
  {filme: 'Monstros S.A.', ano: 2001, diretor: 'Pete Docter, David Silverman, Lee Unkrich'},
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

exibirFilmes();


// Exibir em ordem alfabética:
function alfa() {
  filmes.sort(function(a, b) {
    let x = a.filme.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'');
    let y = b.filme.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'');
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  exibirFilmes();
};


// Exibir em ordem cronológica: 
function cron() {
  filmes.sort(function(a, b) {return a.ano - b.ano});
  exibirFilmes()
};


// Exibir por diretor:
function dire() {
  filmes.sort(function(a, b) {
    let m = a.diretor.toLowerCase();
    let n = b.diretor.toLowerCase();
    if (m < n) {return -1;}
    if (m > n) {return 1;}
    return 0;
  });
  exibirFilmes();
}


function exibirFilmes() {
  let texto = '';
  for (let i = 0; i < filmes.length; i++) {
    texto += `<p> <strong>${filmes[i].filme}</strong> (${filmes[i].ano}) <br> ${filmes[i].diretor} </p>`;
  } 
  document.getElementById('itens-lista').innerHTML = texto;
}