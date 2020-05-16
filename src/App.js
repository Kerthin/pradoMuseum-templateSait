import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import './App.css';

const writersLife = {
  titian: {
    synopsisText: "Was an Italian painter during the Renaissance, considered the most important member of the 16th-century Venetian school. He was born in Pieve di Cadore, near Belluno, then in the Republic of Venice. During his lifetime he was often called da Cadore, taken from the place of his birth. Recognized by his contemporaries as 'The Sun Amidst Small Stars', Titian was one of the most versatile of Italian painters, equally adept with portraits, landscape backgrounds, and mythological and religious subjects. His painting methods, particularly in the application and use of colour, would exercise a profound influence not only on painters of the late Italian Renaissance, but on future generations of Western art. His career was successful from the start, and he became sought after by patrons, initially from Venice and its possessions, then joined by the north Italian princes, and finally the Habsburgs and papacy. Along with Giorgione, he is considered a founder of the Venetian School of Italian Renaissance painting. During the course of his long life, Titian's artistic manner changed drastically, but he retained a lifelong interest in colour. Although his mature works may not contain the vivid, luminous tints of his early pieces, their loose brushwork and subtlety of tone were without precedent in the history of Western painting.",
    earlyLifeText: "The exact time or date of Titian's birth is uncertain.When he was an old man he claimed in a letter to Philip II, King of Spain, to have been born in 1474, but this seems most unlikely. Other writers contemporary to his old age give figures that would equate to birthdates between 1473 and after 1482. Most modern scholars believe a date between 1488 and 1490 is more likely, though his age at death being 99 had been accepted into the 20th century. He was the son of Gregorio Vecellio and his wife Lucia, of whom little is known.Gregorio was superintendent of the castle of Pieve di Cadore and managed local mines for their owners. Gregorio was also a distinguished councilor and soldier. Many relatives, including Titian's grandfather, werenotaries, and the family were well-established in the area, which was ruled by Venice. At the age of about ten to twelve he and his brother Francesco (who perhaps followed later) were sent to an uncle in Venice to find an apprenticeship with a painter.The minor painter Sebastian Zuccato, whose sons became well-knownmosaicists, and who may have been a family friend, arranged for the brothers to enter the studio of the elderlyGentile Bellini, from which they later transferred to that of his brotherGiovanni Bellini. At that time the Bellinis, especially Giovanni, were the leading artists in the city.There Titian found a group of young men about his own age, among them Giovanni Palma da Serinalta, Lorenzo Lotto, Sebastiano Luciani, and Giorgio da Castelfranco, nicknamed Giorgione. Francesco Vecellio, Titian's older brother, later became a painter of some note in Venice. A fresco of Hercules on the Morosini Palace is said to have been one of Titian's earliest works. Others were the Bellini-esque so-called Gypsy Madonna in Vienna, and the Visitation of Mary and Elizabeth (from the convent of S. Andrea), now in theAccademia. A Man with a Quilted Sleeve is an early portrait, painted around 1509 and described by Giorgio Vasari in 1568. Scholars long believed it depicted Ludovico Ariosto, but now think it is of Gerolamo Barbarigo. Rembrandt borrowed the composition for his self-portraits."
  },
  leonardo: {
    synopsisText: "Was an Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. He has been called the father of ichnology, and he is widely considered one of the greatest painters of all time. The Mona Lisa is the most famous of his works and the most popular portrait ever made. The Last Supper is the most reproduced religious painting of all time and his Vitruvian Man drawing is regarded as a cultural icon as well. Perhaps 15 of his paintings have survived. Nevertheless, these few works together with his notebooks, which contain drawings, scientific diagrams, and his thoughts on the nature of painting compose a contribution to later generations of artists rivalled only by that of Leonardo's contemporary. Although he had no formal academic training, many historians and scholars regard Leonardo as the prime exemplar of the 'Universal Genius' or 'Renaissance Man', an individual of 'unquenchable curiosity' and 'feverishly inventive imagination', and he is widely considered one of the most diversely talented individuals ever to have lived.",
    earlyLifeText: "Leonardo was born on 14/15 April 1452 in the Tuscan hill town of Vinci, in the lower valley of the Arno river in the territory of the Medici-ruled Republic of Florence. He was the out-of-wedlock son of Messer Piero Fruosino di Antonio da Vinci, a wealthy Florentinelegal notary, and a peasant named Caterina, identified as Caterina Buti del Vacca and more recently as Caterina di Meo Lippi by historianMartin Kemp. There have been many theories regarding Leonardo's mother's identity, including that she was a slave of foreign origin or an impoverished local youth. Leonardo had no surname in the modern sense—da Vinci simply meaning 'of Vinci'; his full birth name was Lionardo di ser Piero da Vinci, meaning 'Leonardo, (son) of ser Piero from Vinci'. Leonardo spent his first years in thehamlet of Anchiano in the home of his mother, and from at least 1457 lived in the household of his father, grandparents and uncle in the small town of Vinci. His father had married a 16-year-old girl named Albiera Amadori, who loved Leonardo but died young in 1465 without children.In 1468, when Leonardo was 16, his father married again to 20-year-old Francesca Lanfredini, who also died without children. Piero's legitimate heirs were born from his third wife Margherita di Guglielmo, who gave birth to six children, and his fourth and final wife, Lucrezia Cortigiani, who bore him another six heirs. In all, Leonardo had 12 half-siblings, who were much younger than he was (the last was born when Leonardo was 40 years old) and with whom he had very little contact."
  },
  raphael: {
    synopsisText: "Raffaello Sanzio da Urbino, was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur. Together with Michelangelo and Leonardo da Vinci, he forms the traditional trinity of great masters of that period. Raphael was enormously productive, running an unusually large workshop and, despite his death at 37, leaving a large body of work. Many of his works are found in the Vatican Palace, where the frescoed Raphael Rooms were the central, and the largest, work of his career. The best known work is The School of Athens in the Vatican Stanza della Segnatura. After his early years in Rome, much of his work was executed by his workshop from his drawings, with considerable loss of quality. He was extremely influential in his lifetime, though outside Rome his work was mostly known from his collaborative printmaking. After his death, the influence of his great rival Michelangelo was more widespread until the 18th and 19th centuries, when Raphael's more serene and harmonious qualities were again regarded as the highest models.",
    earlyLifeText: "His mother Màgia died in 1491 when Raphael was eight, followed on August 1, 1494 by his father, who had already remarried. Raphael was thus orphaned at eleven, his formal guardian became his only paternal uncle Bartolomeo, a priest, who subsequently engaged in litigation with his stepmother. He probably continued to live with his stepmother when not staying as an apprentice with a master. He had already shown talent, according to Vasari, who says that Raphael had been 'a great help to his father'. A self-portrait drawing from his teenage years shows his precocity. His father's workshop continued and, probably together with his stepmother, Raphael evidently played a part in managing it from a very early age. In Urbino, he came into contact with the works of Paolo Uccello, previously the court painter (d. 1475), and Luca Signorelli, who until 1498 was based in nearby Città di Castello. According to Vasari, his father placed him in the workshop of the Umbrian master Pietro Perugino as an apprentice 'despite the tears of his mother'. The evidence of an apprenticeship comes only from Vasari and another source, and has been disputed - eight was very early for an apprenticeship to begin. An alternative theory is that he received at least some training from Timoteo Viti, who acted as court painter in Urbino from 1495. Most modern historians agree that Raphael at least worked as an assistant to Perugino from around 1500; the influence of Perugino on Raphael's early work is very clear: 'probably no other pupil of genius has ever absorbed so much of his master's teaching as Raphael did', according to Wölfflin. Vasari wrote that it was impossible to distinguish between their hands at this period, but many modern art historians claim to do better and detect his hand in specific areas of works by Perugino or his workshop. Apart from stylistic closeness, their techniques are very similar as well, for example having paint applied thickly, using an oil varnish medium, in shadows and darker garments, but very thinly on flesh areas. An excess of resin in the varnish often causes cracking of areas of paint in the works of both masters. The Perugino workshop was active in both Perugia and Florence, perhaps maintaining two permanent branches. Raphael is described as a 'master', that is to say fully trained, in December 1500."
  },
  botticelli: {
    synopsisText: "Alessandro di Mariano di Vanni Filipepi, known as Sandro Botticelli, was an Italian painter of the Early Renaissance. He belonged to the Florentine School under the patronage of Lorenzo de' Medici, a movement that Giorgio Vasari would characterize less than a hundred years later in his Vita of Botticelli as a 'golden age'. Botticelli's posthumous reputation suffered until the late 19th century; since then, his work has been seen to represent the linear grace of Early Renaissance painting. As well as the small number of mythological subjects which are his best known works today, he painted a wide range of religious subjects and also some portraits. He and his workshop were especially known for their Madonna and Childs, many in the round tondo shape. Botticelli's best-known works are The Birth of Venus and Primavera, both in the Uffizi in Florence. He lived all his life in the same neighbourhood of Florence, with probably his only significant time elsewhere the months he spent painting in Pisa in 1474 and the Sistine Chapel in Rome in 1481 - 82. Only one of his paintings is dated, though others can be dated from other records with varying degrees of certainty, and the development of his style traced with confidence. He was an independent master for all the 1470s, growing in mastery and reputation, and the 1480s were his most successful decade, when all his large mythological paintings were done, and many of his best Madonnas.By the 1490s his style became more personal and to some extent mannered, and he could be seen as moving in a direction opposite to that of Leonardo da Vinci (seven years his junior) and a new generation of painters creating the High Renaissance style as Botticelli returned in some ways to the Gothic style.",
    earlyLifeText: "Botticelli was born in the city of Florence in a house in the street still called Via Borgo Ognissanti. He was to live within a minute or two's walk of this all his life, and to be buried in the Ognissanti ('All Saints') parish church. His father was Mariano di Vanni d'Amedeo Filipepi, and Sandro was the youngest of his four children to survive into adulthood, all boys. The date of his birth is not known, but his father's tax returns in following years give his age as two in 1447 and thirteen in 1458 so, allowing for arguments as to what these statements really meant, dates between 1444 and 1446 are given. His father was a tanner until 1460, before joining his son Antonio in a new business as a beater-out of gold leaf, which would have brought them into contact with artists. Giorgio Vasari reported that Botticelli was initially trained as a goldsmith. He perhaps became an apprentice when he was about fourteen years old, which may indicate that he received a fuller education than many other Renaissance artists. The Ognissanti neighbourhood was mostly 'a modest one, inhabited by weavers and other workmen', but there were some rich families, notably the very rich Rucellai, bankers and wool-merchants, headed by Giovanni di Paolo Rucellai, whose Palazzo Rucellai by Leon Battista Alberti, a landmark in Italian Renaissance architecture, was being built between about 1446 and 1451, Botticelli's earliest years. By 1458, Botticelli's family had moved to the same street as this, and were renting their house from another Rucellai, and there were other dealings involving the two families."
  },
  vanLoo: {
    synopsisText: "Court portrait painter of the Rococo era, one of the most successful representatives of the artistic dynasty of van Loo.",
    earlyLifeText: "He studied under his father, the painter Jean-Baptiste van Loo, at Turin and Rome, and he won a prize at the Académie Royale de Peinture et de Sculpture in Paris in 1725. With his uncle, the painter Charles-André van Loo, he went to Rome in 1727–1732, and in 1736 he became court painter to Philip V of Spain at Madrid, where he was a founder-member of the Royal Academy of Fine Arts of San Fernando in 1752. He returned to Paris in 1753, and painted many portraits of Louis XV of France. In 1765 he succeeded Charles-André as director of the special school of the French academy known as theÉcole Royale des Élèves Protégés. In 1766 he made the portrait of the Portuguese statesman Sebastião de Melo, Marquis of Pombal. Among his brothers were the painters François van Loo (1708–1732) and Charles-Amédée-Philippe van Loo(1719-1795).",
  }
}

const writersData = {
  'Italy': {
    'Titian Vecellio': {
      country: 'Republic of Florence',
      activity: 'Paintner',
      placeOfBorn: 'Pieve di Cadore',
      placeOfDeath: 'Venice',
      quote: 'Старость — самая большая неожиданность в жизни',
      born: '1488',
      died: '1576',
      class: '_bg_titian',
      firstName: 'Tiziano',
      surname: 'Titian',
      paintingName: 'Temptation of Christ',
      paintingDataWritten: '1516',
      century: 'XVI',
      synopsis: writersLife.titian.synopsisText,
      earlyLife: writersLife.titian.earlyLifeText,
      pictures: {
        'Saint Christopher': {
          genre: 'Роман',
          imgBook: '_bg_saintChristopher',
          dateWritten: '1523'
        },
        'Cardinal Pietro Bembo': {
          genre: 'Роман',
          imgBook: '_bg_cardinalPietro',
          dateWritten: '1540'
        },
        'The crowning with thorns': {
          genre: 'Рассказ',
          imgBook: '_bg_crowningThorns',
          dateWritten: '1542'
        },
        'Christ with the Cross': {
          genre: 'Рассказ',
          imgBook: '_bg_christWithCross',
          dateWritten: '1565'
        }
      }
    },
    'Leonardo da Vinci': {
      country: 'Republic of Florence',
      activity: 'Paintner',
      placeOfBorn: 'Anchiano',
      placeOfDeath: 'Amboise',
      quote: 'Чуден Днепр при тихой погоде, когда вольно и плавно мчит сквозь леса и горы полные воды свои',
      born: '1452',
      died: '1519',
      class: '_bg_vinci',
      firstName: 'Leonardo',
      surname: 'Da Vinci',
      paintingName: 'Mona Lisa',
      paintingDataWritten: '1503',
      century: 'XVI',
      synopsis: writersLife.leonardo.synopsisText,
      earlyLife: writersLife.leonardo.earlyLifeText,
      pictures: {
        'Madonna in the rocks': {
          genre: 'Повесть',
          imgBook: '_bg_madonnaInRocks',
          dateWritten: '1483'
        },
        'Baptism of Christ': {
          genre: 'Поэма',
          imgBook: '_bg_baptismOfChrist',
          dateWritten: '1475'
        },
        'Madonna Litta': {
          genre: 'Повесть',
          imgBook: '_bg_madonnaLitta',
          dateWritten: '1490'
        },
        'Adoration of the Magi': {
          genre: 'Повесть',
          imgBook: '_bg_adorationOfMagi',
          dateWritten: '1481'
        },
        'Ginevra de Benci': {
          genre: 'Повесть',
          imgBook: '_bg_ginevraBenci',
          dateWritten: '1474'
        }
      }
    },
    'Raphael Santi': {
      country: 'Holy Roman empire',
      activity: 'Paintner',
      placeOfBorn: 'Urbino',
      placeOfDeath: 'Rome',
      quote: 'Чуден Днепр при тихой погоде, когда вольно и плавно мчит сквозь леса и горы полные воды свои',
      born: '1483',
      died: '1520',
      class: '_bg_raphael',
      firstName: 'Raphael',
      surname: 'Raphael',
      paintingName: 'Сardinal',
      paintingDataWritten: '1510',
      century: 'XVI',
      synopsis: writersLife.raphael.synopsisText,
      earlyLife: writersLife.raphael.earlyLifeText,
      pictures: {
        'Saint Michael and the devil': {
          genre: 'Повесть',
          imgBook: '_bg_michaelDevil',
          dateWritten: '1518'
        },
        'Angel': {
          genre: 'Поэма',
          imgBook: '_bg_angel',
          dateWritten: '1501'
        },
        'Madonna Litta': {
          genre: 'Повесть',
          imgBook: '_bg_angel1500',
          dateWritten: '1500'
        },
        'Donna Velata': {
          genre: 'Повесть',
          imgBook: '_bg_donnaVelata',
          dateWritten: '1516'
        },
        'Madonna with the veil': {
          genre: 'Повесть',
          imgBook: '_bg_madonnaVeil',
          dateWritten: '1509'
        }
      }
    },
    'Sandro Botticelli': {
      country: 'Republic of Florence',
      activity: 'Paintner',
      placeOfBorn: 'Florence',
      placeOfDeath: 'Florence',
      quote: 'Чуден Днепр при тихой погоде, когда вольно и плавно мчит сквозь леса и горы полные воды свои',
      born: '1445',
      died: '1510',
      class: '_bg_botticelli',
      firstName: 'Botticelli',
      surname: 'Botticelli',
      paintingName: 'The Story Of Lucretia',
      paintingDataWritten: '1496',
      century: 'XV',
      synopsis: writersLife.botticelli.synopsisText,
      earlyLife: writersLife.botticelli.earlyLifeText,
      pictures: {
        'Madonna and Child with six saints': {
          genre: 'Повесть',
          imgBook: '_bg_madonnaAndChild',
          dateWritten: '1470'
        },
        'Spring': {
          genre: 'Поэма',
          imgBook: '_bg_spring',
          dateWritten: '1482'
        },
        'The Portrait Of Dante': {
          genre: 'Повесть',
          imgBook: '_bg_dante',
          dateWritten: '1485'
        },
        'Pallas and the Centaur': {
          genre: 'Повесть',
          imgBook: '_bg_pallasAndCentaur',
          dateWritten: '1483'
        }
      }
    }
  },
  'France': {
    'Louis-Michel van Loo': {
      country: 'France',
      activity: 'Paintner',
      placeOfBorn: 'Toulon',
      placeOfDeath: '',
      quote: 'Легко быть философом, выучась наизусть три слова: Бог так сотворил; и сие дая в ответ вместо всех причин',
      born: '1707',
      died: '1771',
      firstName: 'Louis',
      class: '_bg_vanLoo',
      surname: 'Van Loo',
      paintingName: 'Cardinal',
      paintingDataWritten: '1737',
      century: 'XVIII',
      synopsis: writersLife.vanLoo.synopsisText,
      earlyLife: writersLife.vanLoo.earlyLifeText,
      pictures: {
        'The family Philips V of Spain': {
          genre: 'Рукопись',
          imgBook: '_bg_familyPhilips',
          dateWritten: '1743'
        },
        'The goddess Diana on the grid': {
          genre: 'Ода',
          imgBook: '_bg_goddessDiana',
          dateWritten: '1739'
        },
        'The Marquês de Pombal, expelling the Jesuits': {
          genre: 'Ода',
          imgBook: '_bg_marques',
          dateWritten: '1766'
        }
      }
    },
    'Eugene Delacroix': {
      country: 'First French Republic',
      activity: 'Paintner',
      placeOfBorn: 'Saint-Maurice',
      placeOfDeath: 'Paris',
      quote: 'Блеск наружный может заржаветь, но истинная красота не поблекнет никогда',
      born: '1798',
      died: '1863',
      firstName: 'Eugene',
      class: '_bg_delacroix',
      surname: 'Delacroix',
      paintingName: 'The capture of Constantinople by the crusaders',
      paintingDataWritten: '1840',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Freedom leading the people': {
          genre: 'Повесть',
          imgBook: '_bg_freedom',
          dateWritten: '1830'
        },
        'The struggle of the giaour and the Pasha': {
          genre: 'Повесть',
          imgBook: '_bg_struggle',
          dateWritten: '1827'
        },
        'Flowers': {
          genre: 'Повесть',
          imgBook: '_bg_flowers',
          dateWritten: '1833'
        }
      }
    },
    'Claude Monet': {
      country: 'Third French Republic',
      activity: 'Paintner',
      placeOfBorn: 'Paris',
      placeOfDeath: 'Giverny',
      quote: 'Блеск наружный может заржаветь, но истинная красота не поблекнет никогда',
      born: '1840',
      died: '1926',
      firstName: 'Claude',
      class: '_bg_monet',
      surname: 'Monet',
      paintingName: 'Artists garden',
      paintingDataWritten: '1900',
      century: 'XX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Spring in Giverny': {
          genre: 'Повесть',
          imgBook: '_bg_giverny',
          dateWritten: '1894'
        },
        'Camille Monet with a child': {
          genre: 'Повесть',
          imgBook: '_bg_camille',
          dateWritten: '1875'
        }
      }
    }
  },
  'Spain': {
    'Bartholomew Murillo': {
      country: 'Spain',
      activity: 'Paintner',
      placeOfBorn: 'Seville',
      placeOfDeath: 'Seville',
      quote: 'Легко быть философом, выучась наизусть три слова: Бог так сотворил; и сие дая в ответ вместо всех причин',
      born: '1618',
      died: '1682',
      class: '_bg_murillo',
      firstName: 'Bartholomew',
      surname: 'Murillo',
      paintingName: 'The Penitent Magdalene',
      paintingDataWritten: '1650',
      century: 'XVII',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Man of sorrows': {
          genre: 'Рукопись',
          imgBook: '_bg_sorrows',
          dateWritten: '1675'
        },
        'The infant Jesus distributing bread to pilgrims': {
          genre: 'Ода',
          imgBook: '_bg_pilgrims',
          dateWritten: '1678'
        },
        'Ecce Homo': {
          genre: 'Ода',
          imgBook: '_bg_ecceHomo',
          dateWritten: '1660'
        }
      }
    },
    'Salvador Dali': {
      country: 'Spain',
      activity: 'Paintner',
      placeOfBorn: 'Figueres',
      placeOfDeath: 'Figueres',
      quote: 'Самое лучшее предназначение есть защищать свое отечество',
      born: '1934',
      died: '1982',
      firstName: 'Salvador',
      class: '_bg_dali',
      surname: 'Dali',
      paintingName: 'Evening spider promises hope',
      paintingDataWritten: '1940',
      century: 'XX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Eriyen Saat': {
          genre: 'Стихотворение',
          imgBook: '_bg_saat',
          dateWritten: '1954'
        },
        'Geopoliticus Child Watching the Birth of the New Man': {
          genre: 'Поэзия',
          imgBook: '_bg_geopoliticus',
          dateWritten: '1943'
        },
        'The persistence of memory': {
          genre: 'Поэзия',
          imgBook: '_bg_memory',
          dateWritten: '1931'
        }
      }
    },
    'Pablo Picasso': {
      country: 'Spain',
      activity: 'Paintner',
      placeOfBorn: 'Malaga',
      placeOfDeath: 'Mougins',
      quote: 'Блеск наружный может заржаветь, но истинная красота не поблекнет никогда',
      born: '1881',
      died: '1973',
      class: '_bg_picasso',
      firstName: 'Pablo',
      surname: 'Picasso',
      paintingName: 'Sur fond rouge',
      paintingDataWritten: '1895',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Le Palais des Arts Е Barcelone': {
          genre: 'Повесть',
          imgBook: '_bg_barcelone',
          dateWritten: '1903'
        },
        'Lenfant de choeur': {
          genre: 'Повесть',
          imgBook: '_bg_lenfant',
          dateWritten: '1896'
        },
        'Mulet': {
          genre: 'Повесть',
          imgBook: '_bg_mulet',
          dateWritten: '1898'
        }
      }
    },
    'El Greco': {
      country: 'Spain',
      activity: 'Paintner',
      placeOfBorn: 'Crete',
      placeOfDeath: 'Toledo',
      quote: 'Блеск наружный может заржаветь, но истинная красота не поблекнет никогда',
      born: '1541',
      died: '1614',
      class: '_bg_greco',
      firstName: 'El',
      surname: 'Greco',
      paintingName: 'Riz tearing from Christ',
      paintingDataWritten: '1577',
      century: 'XVI',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'The burial of count Orgas': {
          genre: 'Повесть',
          imgBook: '_bg_orgas',
          dateWritten: '1586'
        },
        'The crucifixion with two donors': {
          genre: 'Поэзия',
          imgBook: '_bg_crucifixion',
          dateWritten: '1580'
        },
        'Portrait Of Jorge Manuel': {
          genre: 'Поэзия',
          imgBook: '_bg_jorgeManuel',
          dateWritten: '1600'
        }
      }
    }
  },
  'Belgium': {
    'Jan van Eyck': {
      country: 'Belgium',
      activity: 'Paintner',
      placeOfBorn: 'Maaseik',
      placeOfDeath: 'Brugge',
      quote: 'Старость — самая большая неожиданность в жизни',
      born: '1385',
      died: '1441',
      class: '_bg_eyck',
      firstName: 'Jan',
      surname: 'Van Eyck',
      paintingName: 'Madonna of the Canon van der pale',
      paintingDataWritten: '1436',
      century: 'XV',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Portrait of a man in a red turban': {
          genre: 'Роман',
          imgBook: '_bg_turban',
          dateWritten: '1433'
        },
        'The Ghent altarpiece': {
          genre: 'Роман',
          imgBook: '_bg_ghent',
          dateWritten: '1432'
        },
        'Fountain of grace and the triumph of the Church over the synagogue': {
          genre: 'Рассказ',
          imgBook: '_bg_fountain',
          dateWritten: '1430'
        }
      }
    },
    'Anthony van Dyck': {
      country: 'Belgium',
      activity: 'Paintner',
      placeOfBorn: 'Antwerp',
      placeOfDeath: 'London',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1599',
      died: '1641',
      class: '_bg_dyck',
      firstName: 'Anthony',
      surname: 'Van Dyck',
      paintingName: 'François Langlois',
      paintingDataWritten: '1630',
      century: 'XVII',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'The Lamentation Of Christ': {
          genre: 'Повесть',
          imgBook: '_bg_lamentation',
          dateWritten: '1634'
        },
        'Charles I from three angles': {
          genre: 'Поэма',
          imgBook: '_bg_charles',
          dateWritten: '1635'
        },
        'Family portrait': {
          genre: 'антиутопия',
          imgBook: '_bg_family',
          dateWritten: '1618'
        },
        'St. Martin cutting his cloak in two': {
          genre: 'антиутопия',
          imgBook: '_bg_stMartin',
          dateWritten: '1618'
        }
      }
    },
    'Rene Magritte': {
      country: 'Belgium',
      activity: 'Paintner',
      placeOfBorn: 'Lessin',
      placeOfDeath: 'Brussels',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1898',
      died: '1967',
      class: '_bg_magritte',
      firstName: 'Rene',
      surname: 'Magritte',
      paintingName: 'Golconda',
      paintingDataWritten: '1953',
      century: 'XX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'The son of Man': {
          genre: 'Повесть',
          imgBook: '_bg_sonOfMan',
          dateWritten: '1964'
        },
        'Void obstacle': {
          genre: 'Поэма',
          imgBook: '_bg_obstacle',
          dateWritten: '1965'
        },
        'The infinite recognition': {
          genre: 'антиутопия',
          imgBook: '_bg_recognition',
          dateWritten: '1963'
        }
      }
    }
  },
  'Germany': {
    'Rafael Mengs': {
      country: 'Germany',
      activity: 'Paintner',
      placeOfBorn: 'Usti nad Labem',
      placeOfDeath: 'Rome',
      quote: 'Старость — самая большая неожиданность в жизни',
      born: '1728',
      died: '1779',
      class: '_bg_mengs',
      firstName: 'Rafael',
      surname: 'Mengs',
      paintingName: 'Portrait of Charles III Spanish',
      paintingDataWritten: '1765',
      century: 'XVIII',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'The adoration of the shepherds': {
          genre: 'Роман',
          imgBook: '_bg_adoration',
          dateWritten: '1770'
        },
        'Perseus and Andromeda': {
          genre: 'Роман',
          imgBook: '_bg_perseus',
          dateWritten: '1622'
        },
        'St. Josephs dream': {
          genre: 'Рассказ',
          imgBook: '_bg_stJoseph',
          dateWritten: '1774'
        }
      }
    },
    'Wilhelm Camphausen': {
      country: 'Germany',
      activity: 'Paintner',
      placeOfBorn: 'Dusseldorf',
      placeOfDeath: 'Dusseldorf',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1818',
      died: '1885',
      class: '_bg_camphausen',
      firstName: 'Wilhelm',
      surname: 'Camphausen',
      paintingName: 'The crossing of the Rhine in Kaube army Blucher',
      paintingDataWritten: '1860',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Bismarck and Napoleon III after the battle of Sedan': {
          genre: 'Повесть',
          imgBook: '_bg_bismarck',
          dateWritten: '1874'
        },
        'Field Marshal Blucher in his youth': {
          genre: 'Поэма',
          imgBook: '_bg_blucher',
          dateWritten: '1867'
        },
        'The victory of the Austrians over the Turks at mohach': {
          genre: 'Поэма',
          imgBook: '_bg_austrians',
          dateWritten: '1865'
        }
      }
    },
    'Franz Xaver Winterhalter': {
      country: 'German empire',
      activity: 'Paintner',
      placeOfBorn: 'Black Forest',
      placeOfDeath: 'Frankfurt',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1818',
      died: '1885',
      class: '_bg_winterhalter',
      firstName: 'Franz',
      surname: 'Winterhalter',
      paintingName: 'Royal family',
      paintingDataWritten: '1846',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'The First of May': {
          genre: 'Повесть',
          imgBook: '_bg_firstOfMay',
          dateWritten: '1851'
        },
        'Florinda': {
          genre: 'Поэма',
          imgBook: '_bg_florinda',
          dateWritten: '1853'
        },
        'Napoleon III, Emperor of France': {
          genre: 'Поэма',
          imgBook: '_bg_napoleon',
          dateWritten: '1853'
        }
      }
    }
  },
  'Russia': {
    'Karl Pavlovich Brullov': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Saint-Petersburg',
      placeOfDeath: 'Manziana',
      quote: 'Старость — самая большая неожиданность в жизни',
      born: '1799',
      died: '1852',
      class: '_bg_brullov',
      firstName: 'Karl',
      surname: 'Brullov',
      paintingName: 'The last day of Pompeii',
      paintingDataWritten: '1828',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Horsewoman': {
          genre: 'Роман',
          imgBook: '_bg_horsewoman',
          dateWritten: '1832'
        },
        'Portrait of Countess Yulia Pavlovna Samoilova': {
          genre: 'Роман',
          imgBook: '_bg_samoilova',
          dateWritten: '1842'
        },
        'Vesper': {
          genre: 'Рассказ',
          imgBook: '_bg_vesper',
          dateWritten: '1825'
        }
      }
    },
    'Ilya Efimovich Repin': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Chuguev',
      placeOfDeath: 'Repino',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1844',
      died: '1930',
      class: '_bg_repin',
      firstName: 'Ilya',
      surname: 'Repin',
      paintingName: 'Boatmen on the Volga',
      paintingDataWritten: '1870',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Ivan the terrible and his son Ivan': {
          genre: 'Повесть',
          imgBook: '_bg_ivanTerrible',
          dateWritten: '1885'
        },
        'Cossacks write a letter to the Turkish Sultan': {
          genre: 'Поэма',
          imgBook: '_bg_cossacks',
          dateWritten: '1889'
        },
        'Portrait of writer L. N. Tolstoy': {
          genre: 'антиутопия',
          imgBook: '_bg_tolstoy',
          dateWritten: '1887'
        }
      }
    },
    'Ivan Nikolaevich Kramskoy': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Ostrogozhsk',
      placeOfDeath: 'Saint-Petersburg',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1837',
      died: '1887',
      class: '_bg_kramskoy',
      firstName: 'Ivan',
      surname: 'Kramskoy',
      paintingName: 'Unknown',
      paintingDataWritten: '1872',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Christ in the desert': {
          genre: 'Поэма',
          imgBook: '_bg_desert',
          dateWritten: '1883'
        },
        'Portrait of Empress Maria Feodorovna': {
          genre: 'антиутопия',
          imgBook: '_bg_mariaFeodorovna',
          dateWritten: '1882'
        },
        'Mina Moiseev': {
          genre: 'антиутопия',
          imgBook: '_bg_mina',
          dateWritten: '1882'
        },
        'Sophia Kramskaya Reading': {
          genre: 'антиутопия',
          imgBook: '_bg_kramskaya',
          dateWritten: '1866'
        }
      }
    },
    'Ivan Ivanovich Shishkin': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Elabuga',
      placeOfDeath: 'Saint-Petersburg',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1832',
      died: '1898',
      class: '_bg_shishkin',
      firstName: 'Ivan',
      surname: 'Shishkin',
      paintingName: 'Morning in the pine forest',
      paintingDataWritten: '1889',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'In the Northern wilderness': {
          genre: 'Поэма',
          imgBook: '_bg_northern',
          dateWritten: '1891'
        },
        'Landscape': {
          genre: 'антиутопия',
          imgBook: '_bg_landscape',
          dateWritten: '1861'
        },
        'On the waterfront': {
          genre: 'антиутопия',
          imgBook: '_bg_waterfront',
          dateWritten: '1887'
        },
        'Birch grove': {
          genre: 'антиутопия',
          imgBook: '_bg_birch',
          dateWritten: '1896'
        }
      }
    },
    'Ivan Konstantinovich Aivazovsky': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Feodosiya',
      placeOfDeath: 'Feodosiya',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1817',
      died: '1900',
      class: '_bg_aivazovsky',
      firstName: 'Ivan',
      surname: 'Aivazovsky',
      paintingName: 'Review of the black sea fleet in 1849',
      paintingDataWritten: '1886',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Chesme battle in the night from 25 to 26 June 1770': {
          genre: 'антиутопия',
          imgBook: '_bg_chesme',
          dateWritten: '1849'
        },
        'Windmill by the sea': {
          genre: 'антиутопия',
          imgBook: '_bg_windmill',
          dateWritten: '1837'
        },
        'Turret. Shipwreck': {
          genre: 'антиутопия',
          imgBook: '_bg_turret',
          dateWritten: '1847'
        },
        'Brig mercury attacked by two Turkish ships': {
          genre: 'антиутопия',
          imgBook: '_bg_mercury',
          dateWritten: '1892'
        }
      }
    },
    'Viktor Mikhailovich Vasnetsov': {
      country: 'Russian empire',
      activity: 'Paintner',
      placeOfBorn: 'Labial',
      placeOfDeath: 'Moscow',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1848',
      died: '1926',
      class: '_bg_vasnetsov',
      firstName: 'Ivan',
      surname: 'Vasnetsov',
      paintingName: 'Knight at the crossroads',
      paintingDataWritten: '1882',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Three Bogatyrs': {
          genre: 'антиутопия',
          imgBook: '_bg_threeBogatyrs',
          dateWritten: '1881'
        },
        'Tsar Ivan IV Vasilyevich the terrible': {
          genre: 'антиутопия',
          imgBook: '_bg_tsarIvan',
          dateWritten: '1897'
        },
        'Bogatyr': {
          genre: 'антиутопия',
          imgBook: '_bg_bogatyr',
          dateWritten: '1920'
        }
      }
    }
  },
  'Netherlands': {
    'Pieter Bruegel The Elder': {
      country: 'Netherlands',
      activity: 'Paintner',
      placeOfBorn: 'Breda',
      placeOfDeath: 'Brussels',
      quote: 'Старость — самая большая неожиданность в жизни',
      born: '1525',
      died: '1569',
      class: '_bg_bruegel',
      firstName: 'Pieter',
      surname: 'Bruegel',
      paintingName: 'Babel',
      paintingDataWritten: '1565',
      century: 'XVI',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Sauls Suicide': {
          genre: 'Роман',
          imgBook: '_bg_saul',
          dateWritten: '1562'
        },
        'The Flemish Proverbs': {
          genre: 'Роман',
          imgBook: '_bg_flemish',
          dateWritten: '1559'
        },
        'The fall of the rebel angels': {
          genre: 'Рассказ',
          imgBook: '_bg_rebelAngels',
          dateWritten: '1562'
        }
      }
    },
    'Peter Paul Rubens': {
      country: 'Netherlands',
      activity: 'Paintner',
      placeOfBorn: 'Siegen',
      placeOfDeath: 'Antwerp',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1577',
      died: '1640',
      class: '_bg_rubens',
      firstName: 'Peter',
      surname: 'Rubens',
      paintingName: 'Peace And War',
      paintingDataWritten: '1629',
      century: 'XVII',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Andromeda': {
          genre: 'Повесть',
          imgBook: '_bg_andromeda',
          dateWritten: '1638'
        },
        'Drunk Silenus': {
          genre: 'Поэма',
          imgBook: '_bg_silenus',
          dateWritten: '1616'
        },
        'Perseus frees Andromeda': {
          genre: 'антиутопия',
          imgBook: '_bg_perseus',
          dateWritten: '1620'
        },
        'Tiger hunting': {
          genre: 'антиутопия',
          imgBook: '_bg_tigerHunting',
          dateWritten: '1616'
        }
      }
    },
    'Rembrandt Harmens van Rijn': {
      country: 'Netherlands',
      activity: 'Paintner',
      placeOfBorn: 'Leiden',
      placeOfDeath: 'Amsterdam',
      quote: 'Отправляясь утром на работу в набитом, надсадно пыхтящем автобусе, она всматривалась в лица молчащих, не совсем проснувшихся людей и не находила среди них человека, способного удивить судьбой, лицом, поведением. Все они были знакомы и узнаваемы, как гнутая ручка двери или раздробленные плитки на полу казенного туалета.',
      born: '1606',
      died: '1669',
      class: '_bg_rembrandt',
      firstName: 'Rembrandt',
      surname: 'Rembrandt',
      paintingName: 'Anatomy lesson by Dr. Nicholas Tulp',
      paintingDataWritten: '1632',
      century: 'XVII',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Christ in a storm on the sea of Galilee': {
          genre: 'Повесть',
          imgBook: '_bg_galilee',
          dateWritten: '1633'
        },
        'Three musicians': {
          genre: 'Поэма',
          imgBook: '_bg_musicians',
          dateWritten: '1624'
        },
        'Portrait of doctor and writer Ephraim Bueno': {
          genre: 'антиутопия',
          imgBook: '_bg_bueno',
          dateWritten: '1645'
        }
      }
    },
    'Vincent Van Gogh': {
      country: 'Netherlands',
      activity: 'Paintner',
      placeOfBorn: 'Zundert',
      placeOfDeath: 'Auvers-sur-Oise',
      quote: 'Самое лучшее предназначение есть защищать свое отечество',
      born: '1853',
      died: '1890',
      firstName: 'Vincent',
      class: '_bg_vanGogh',
      surname: 'Van Gogh',
      paintingName: 'Starry night',
      paintingDataWritten: '1889',
      century: 'XIX',
      synopsis: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      earlyLife: "Born sometime between 1488 and 1490. Titian become an artist's apprentice in Venice as a teenager. He worked with Sebastiano, Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of 'Assumption of the Virgin'. He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor.",
      pictures: {
        'Wheat field with cypresses': {
          genre: 'Стихотворение',
          imgBook: '_bg_wheatField',
          dateWritten: '1889'
        },
        'Red vineyards in Arles': {
          genre: 'Поэзия',
          imgBook: '_bg_redVineyards',
          dateWritten: '1888'
        },
        'Sower': {
          genre: 'Поэзия',
          imgBook: '_bg_sower',
          dateWritten: '1888'
        }
      }
    }
  }
}

// ----- Picture Components
function PictureInfo(props) {
  return(
    <div className="picture__textWrap">
      <div className="picture__text">
        <h1 className="picture__date">{props.dateWritten}</h1>
        <p className="picture__name">{props.name}</p>
      </div>
    </div>
  );
}

function PictureImg(props) {
  return(
    <div className="picture__imgWrap">
      <div className="picture__img">
        <div className={`picture__imgBg ${props.imgBook}`}></div>
      </div>
    </div>
  );
}

function Picture(props) {
  return(
    <div className="picture">
      <div className="picture__info">
        <PictureInfo dateWritten={props.dateWritten} name={props.name} />
        <PictureImg imgBook={props.imgBook} />
      </div>
    </div>
  );
}

function Pictures(props) {
  return (
    <React.Fragment>
      {Object.entries(props.pictures || {}).map(([ i, j ]) => (
        <Picture key={i} name={i} {...j} />
      ))}
    </React.Fragment>
  );
}
// ----- END Picture Components


// ----- Painter Components
function PainterInfo(props) {
  return(
    <div className="painter__textWrap">
      <div className="painter__text">
        <h1 className="painter__name">{props.name}</h1>
        <p className="painter__years">{props.born} - {props.died}</p>
      </div>
    </div>
  );
}

function PainterImg(props) {
  return(
    <div className="painter__imgWrap">
      <div className="painter__img">
        <div className={`painter__imgBg ${props.class}`}></div>
      </div>
    </div>
  );
}

function Painter(props) {
  return(
    <a href="#" onClick={() => props.onClickLink(props)}>
      <div className={`painter ${props.active ? 'active' : ''}`} onClick={() => props.onClick(props)}>
        <div className="painter__info">
          <PainterInfo name={props.name} born={props.born} died={props.died} />
          <PainterImg class={props.class} />
        </div>
      </div>
    </a>
  );
}
// ----- END Painter Components


// ----- Сountries Components
function CountryTitle(props) {
  return(
    <div className="countryTitle">
      <h2 className="countryTitle__name">{props.name}</h2>
    </div>
  );
}
function Сountries(props) {
  return(
    <div className="swiper-slide">
      <CountryTitle name={props.name} />
      {Object.entries(props.painters).map(([ i, j ]) => (
        <Painter key={i} name={i} {...j} onClickLink={props.onSelectLink} onClick={props.onSelectWriter} active={i === props.selected} />
      ))}
    </div>
  );
}
// ----- END Сountries Components



function BurgerMenu(props) {
  return(
    <div onClick={props.onSelectBurger} className={`wrap ${props.onSelectBurgerClass}`}>
      <div className="item itemFirst"></div>
      <div className="item itemSecond"></div>
    </div>
  );
}


// ----- PainterBlock Components
function PainterBlockRepresent(props) {
  return(
    <div className="painterBlock__represent">
      <button className="nav-leftClose" onClick={props.onSelectClose}>BACK</button>
      <div className="painterQuick">
        <div className="painterQuick__imgWrap">
          <div className={`painterQuick__img ${props.class}`}></div>
        </div>
        <h1 className="painterQuick__name _firstName">{props.firstName},</h1>
        <h1 className="painterQuick__name">{props.name}</h1>
        <p className="painterQuick__subtitle">Quick Facts</p>
      </div>
    </div>
  );
}

function PainterActivity(props) {
  return(
    <div className="painterBlock__category">
      <p className="painterBlock__title">Activity</p>
      <p className="painterBlock__data">{props.activity}</p>
    </div>
  );
}

function PainterBirth(props) {
  return(
    <div className="painterBlock__category">
      <p className="painterBlock__title">Place of birth</p>
      <p className="painterBlock__data">{props.placeOfBorn}, {props.country}, {props.born}</p>
    </div>
  );
}
function PainterDeath(props) {
  return(
    <div className="painterBlock__category">
      <p className="painterBlock__title">Place of death</p>
      <p className="painterBlock__data">{props.placeOfDeath}, {props.died}</p>
    </div>
  );
}

function PainterName(props) {
  return(
    <div className="painterBlock__category">
      <p className="painterBlock__title">Full name</p>
      <p className="painterBlock__data">{props.name}</p>
    </div>
  );
}

function PainterBlockInfo(props) {
  return(
    <div className="painterBlock__info">
      <PainterActivity activity={props.activity} />
      <PainterBirth placeOfBorn={props.placeOfBorn} country={props.country} born={props.born} />
      <PainterDeath placeOfDeath={props.placeOfDeath} died={props.died} />
      <PainterName name={props.name} />
    </div>
  );
}

function PainterBlock(props) {
  return(
      <div className="painterBlock">
        <PainterBlockRepresent  onSelectClose={props.onSelectClose}
                                class={props.class}
                                firstName={props.firstName}
                                name={props.name} />

        <PainterBlockInfo   activity={props.activity}
                            placeOfBorn={props.placeOfBorn}
                            country={props.country}
                            name={props.name}
                            born={props.born}
                            placeOfDeath={props.placeOfDeath}
                            died={props.died} />
      </div>
  );
}
// ----- END PainterBlock Components



function PicturesBlock(props) {
  return(
      <div className="picturesBlock">
        <Pictures pictures={props.pictures} />
      </div>
  );
}


// ----- LifeBlock Components
function SynopsisParagraph(props) {
  return(
    <div className="lifeBlock__paragraphWrap _synopsis">
      <p className="lifeBlock__paragraph">{props.synopsis}</p>
    </div>
  );
}
function Synopsis(props) {
  return(
    <div className="lifeBlock__box">
      <div className="lifeBlock__abstract">
        <div className="lifeBlock__titleWrap">
          <h1 className="lifeBlock__title">Synopsis</h1>
          <div className="lifeBlock__circle _synopsis"></div>
        </div>
        <SynopsisParagraph synopsis={props.synopsis} />
      </div>
    </div>
  );
}

function EarlyLifeParagraph(props) {
  return(
    <div className="lifeBlock__paragraphWrap">
      <p className="lifeBlock__paragraph">{props.earlyLife}</p>
    </div>
  );
}
function EarlyLife(props) {
  return(
    <div className="lifeBlock__box _earlyLife">
      <div className="lifeBlock__abstract">
        <div className="lifeBlock__titleWrap">
          <h1 className="lifeBlock__title">Early Life</h1>
          <div className="lifeBlock__circle _earlyLife"></div>
        </div>
        <EarlyLifeParagraph earlyLife={props.earlyLife} />
      </div>
    </div>
  );
}

function LifeBlock(props) {
  return(
    <div className="lifeBlock">
      <Synopsis synopsis={props.synopsis} />
      <EarlyLife earlyLife={props.earlyLife} />
    </div>
  );
}
// ----- END LifeBlock Components


// ----- MainPage Components
function PaintnerData(props) {
  return(
    <div className="paintnerData">
      <div className="paintnerData__years"><p>{(props.born)? `${props.born} - ${props.died}` : "1819"}</p></div>
      <div className="paintnerData__name"><p>{(props.surname)? `${props.surname}` : "Prado"}</p></div>
      <div className="paintnerData__country"><p>{(props.country)? `${props.country}` : "Spain"}</p></div>
    </div>
  );
}

function PaintingData(props) {
  return(
    <div className="paintingData">
      <div className="paintingData__img">
        <div className={`paintingData__menuButton ${props.class}`} onClick={props.onSelectBlock}></div>
      </div>
      <div className="paintingData__paint">
        <div className="paintInfo">
          <p className="paintInfo__century">{(props.century)? `${props.century}` : ""}</p>
          <p className="paintInfo__name">{(props.paintingName)? `${props.paintingName}` : ""}</p>
        </div>
        <div className="exploreButton">
          <p className="exploreButton__text">▲</p>
          <p className="exploreButton__text">Explore</p>
        </div>
        <div className="painterInfo">
          <p className="paintInfo__year">{(props.paintingDataWritten)? `${props.paintingDataWritten}` : ""}</p>
          <p className="painterInfo__name">{(props.name)? `${props.name}` : ""}</p>
        </div>
      </div>
    </div>
  );
}

function PresentBlock(props) {
  return(
    <div className={`presentBlock ${props.class}`}>
      <div className="presentBlock__info">
        <PaintnerData born={props.born}
                      died={props.died}
                      surname={props.surname}
                      country={props.country} />

        <PaintingData class={props.class}
                      onSelectBlock={props.onSelectBlock}
                      century={props.century}
                      paintingName={props.paintingName}
                      paintingDataWritten={props.paintingDataWritten}
                      name={props.name} />
      </div>
    </div>
  );
}

function MainPage(props) {
  return(
    <div className="mainPage">
      <PresentBlock born={props.born}
                    died={props.died}
                    surname={props.surname}
                    country={props.country}
                    class={props.class}
                    onSelectBlock={props.onSelectBlock}
                    century={props.century}
                    paintingName={props.paintingName}
                    paintingDataWritten={props.paintingDataWritten}
                    name={props.name} />
      
      <div className="block2"></div>
    </div>
  );
}
// ----- END MainPage Components



function FilterSidebar(props) {
  return(
    <div className="filterSidebar">
      <div className="filterSidebar__buttons">
        <button className="filterButton">FILTER</button>
        <button className="listButton">LIST</button>
      </div>
    </div>
  );
}


// ----- Slider Components
class Slider extends React.Component {
  
  componentDidMount() {    
    new Swiper(this.refs.slider,{
      slidesPerView : this.props.slidePerView,
      slidesPerGroup: this.props.slidesPerGroup,
      loop: this.props.loop,
      freeMode: true,
      keyboardControl : true
   });
  }
  
  render() {
    return (
      <div className="containerSlider">
        <div className="swiper-container" ref="slider">
          <div className="swiper-wrapper">
            {this.props.children}
          </div> 
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  slidePerView: PropTypes.string,
  slidesPerGroup : PropTypes.string,
  loop : PropTypes.string,
};
// ----- END Slider Components


// ----- MenuTopSidebar Components
function MenuTopSidebar(props) {
  return(
    <div className={`menuTopSidebar ${props.moc}`}></div>
  );
}
// ----- END MenuTopSidebar Components


// ----- TopSidebar Components
function TopSidebar(props) {
  return(
    <div className="topSidebar">
      <div className="topSidebar__burgerWrap">
        <BurgerMenu onSelectBurger={props.onSelectLinkItem} onSelectBurgerClass={props.moc} />
      </div>
      <div className="topSidebar__nameWrap">
        <p className="topSidebar__name">Prado Museum <sup>®</sup></p>
      </div>
      <div className="topSidebar__eventsWrap">
        <p className="topSidebar__events">
          <a href="#" className="topSidebar__event">Tours
            <span className="topSidebar__slash">/</span>
          </a>
          <a href="#" className="topSidebar__event">Events
            <span className="topSidebar__slash">/</span>
          </a>
          <a href="#" className="topSidebar__event">Artists</a>
        </p>
      </div>
      <div className="topSidebar__ticketsWrap">
        <p className="topSidebar__tickets">Buy Tickets</p>
      </div>
    </div>
  );
}
// ----- END TopSidebar Components


// ----- MenuTop Components
function MenuTop(props) {
  return(
    <div className={`menu ${props.mo}`}>
      <div className="menuWrap">
        <FilterSidebar />
        <Slider slidePerView="auto" slidesPerGroup="6">
          {Object.entries(props.centuries).map(([ i, j ]) => (
            <Сountries key={i} name={i} painters={j} onSelectLink={props.onSelectLink} onSelectWriter={props.onSelectWriter} selected={props.selected} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
// ----- END MenuTop Components


// ----- MenuLeft Components
function MenuLeft(props) {
  return(
    <div className={`menuLeft ${props.mlo}`}>
      <div className="menuLeft__infoWrap">
        <PainterBlock {...props.selected} onSelectClose={props.tdl} />
        <PicturesBlock {...props.selected} />
        <LifeBlock {...props.selected} />
      </div>
    </div>
  );
}
// ----- END MenuLeft Components

// ----- Preloader Components
function Preloader(props) {
  return(
    <div>
      {props.show && <div className={`preloader ${props.ac}`}>
        <div className="imagePreloader">
          <div className="imagePreloader__titleWrap">
            <div className="imagePreloader__title"><p>Prado Museum</p></div>
          </div>
        </div>
      </div>}
    </div>
  );
}
// ----- END Preloader Components


// ----- App Components
function App(props) {
  const [ selected, setSelected ] = React.useState({});

  const onSelectWriterVar = writer => setSelected(writer);

  return(
    <div className={`container ${props.mom}`}>
      <Preloader show={props.show} ac={props.ac} />
      <MainPage {...selected} onSelectBlock={props.tdl} outWriterDataItem={selected} />
      <MenuTopSidebar moc={props.moc} />
      <TopSidebar onSelectLinkItem={props.onSelectLinkItem} moc={props.moc} />
      <MenuTop mo={props.mo} centuries={props.centuries} onSelectLink={props.onSelectLinkItem} onSelectWriter={onSelectWriterVar} selected={selected.name} />
      <MenuLeft mlo={props.mlo} selected={selected} tdl={props.tdl} />
    </div>
  );
}
// ----- END App Components



class Menu extends React.Component{
   constructor() {
    super();
    this.state = { menuOpen:false, menuLeftOpen: false, show: true, addClass: false } ;
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropleft = this.toggleDropleft.bind(this);
  }
  toggleDropdown(event){
    this.setState({menuOpen: !this.state.menuOpen});
  }
  toggleDropleft(){
    this.setState({menuLeftOpen: !this.state.menuLeftOpen});
  }
  closeDropdown (){
    this.setState({menuOpen: false});
  }
  toggleWithTimeout(prop, timeout) {
    setTimeout(() => this.setState(state => ({
      [prop]: !state[prop],
    })), timeout);
  }

  componentDidMount() {
    this.toggleWithTimeout('addClass', 5000);
    this.toggleWithTimeout('show', 7000);
  }

  render() {
    const momVar = (this.state.menuOpen)? "open" : "";
    const acV = (this.state.addClass) ? 'closePreloader' : '';
    const moVar = (this.state.menuOpen)? "open" : "";
    const mocVar = (this.state.menuOpen)? "open" : "close";
    const tdVar = this.toggleDropdown;
    const mloVar = (this.state.menuLeftOpen)? "open" : "";
    const tdlVar = this.toggleDropleft;
    const { show, addClass } = this.state;

    return (
      <App  centuries={writersData}
            mom={momVar}
            show={show}
            ac={acV}
            mo={moVar}
            moc={mocVar}
            onSelectLinkItem={tdVar}
            mlo={mloVar}
            tdl={tdlVar} />
    ) 
  }
}


export default Menu;