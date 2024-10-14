/* -----FILMER----- */



/* Mall = Titel (år), bildlänk, rating imdb, speltid, genre, era. */


const test = ["test", "img/test.jpg", "2.1", "2h", "drama", "40s"];
const shawshank = ["The Shawshank Redemption (1994)", "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", "IMDB #1: 9.3", "3h", "drama", "1990"];
const godfather = ["The Godfather (1972)", "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", "IMDB #2: 9.2", "3h", "crime", "1970"];
const darkknight = ["The Dark Knight (2008)", "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg", "IMDB #3: 9.0", "3h", "action", "2000"];
const godfatherII = ["The Godfather II (1974)", "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", "IMDB #4: 9.0", "3h-", "crime", "1970"];
const angrymen = ["12 Angry Men (1957)", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/1200px-12_Angry_Men_%281957_film_poster%29.jpg", "IMDB #5: 9.0", "2h", "drama", "50"];
const schindler = ["Schindler's List (1993)", "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "IMDB #6: 9.0", "3h-", "drama", "1990"];
const lotrIII = ["The Lord of the Rings: The Return of the King (2003)", "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", "IMDB #7: 9.0", "3h-", "adventure", "2000"];
const pulpfiction = ["Pulp Fiction (1994)", "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/2212/original.jpg", "IMDB #8: 8.9", "3h", "crime", "1990"];
const lotrI = ["The Lord of the Rings: The Fellowship of the Ring (2001)", "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", "IMDB #9: 8.9", "3h", "adventure", "2000"];
const tgbu = ["The Good, the Bad and the Ugly (1966)", "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg", "IMDB #10: 8.8", "3h", "western", "1960"];
const forrest = ["Forrest Gump (1994)", "https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg", "IMDB #11: 8.8", "3h", "drama", "1990"];
const lotrII = ["The Lord of the Rings: The Two Towers (2002)", "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", "IMDB #12: 8.8", "3h", "adventure", "2000"];
const fightclub = ["Fight Club (1999)", "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", "IMDB #13: 8.8", "3h", "drama", "1990"];
const inception = ["Inception (2010)", "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", "IMDB #14: 8.8", "3h", "action", "2010"];
const swV = ["Star Wars: Episode V - The Empire Strikes Back (1980)", "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", "IMDB #15: 8.7", "3h", "adventure", "1980"];
const matrix = ["The Matrix (1999)", "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "IMDB #16: 8.7", "3h", "action", "1990"];
const goodfellas = ["Goodfellas (1990)", "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", "IMDB #17: 8.7", "3h", "crime", "1990"];
const cuckoo = ["One Flew Over the Cuckoo's Nest (1975)", "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", "IMDB #18: 8.7", "3h", "drama", "1970"];
const seven = ["Se7en (1995)", "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "IMDB #19: 8.6", "3h", "crime", "1990"];
const interstellar = ["Interstellar (2014)", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", "IMDB #20: 8.7", "3h", "adventure", "3010"];
const wonderfullife = ["It's a Wonderful Life (1946)", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg/1200px-It%27s_a_Wonderful_Life_%281946_poster%29.jpeg", "IMDB #21: 8.6", "3h", "drama", "2940"];
const samurai = ["Seven Samurai (1954)", "https://m.media-amazon.com/images/M/MV5BOGNiY2QzOTAtOWNlZC00NjAwLWFmMTAtNTJhYTBiNTY4ODU0XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg", "IMDB #22: 8.6", "3h-", "action", "1950"];
const silence = ["The Silence of the Lambs (1991)", "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "IMDB #23: 8.6", "2h", "horror", "1990"];
const privateryan = ["Saving Private Ryan (1998)", "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg", "IMDB #24: 8.6", "3h", "drama", "1990"];
const cityofgod = ["City of God (2002)", "https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", "IMDB #25: 8.6", "3h", "crime", "2000"];
const lifeisbeautiful = ["Life Is Beautiful (1997)", "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22005_p_v8_aa.jpg", "IMDB #26: 8.6", "2h", "comedy", "1990"];
const duneII = ["Dune: Part Two (2024)", "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg", "IMDB #27: 8.6", "3h", "action", "2020"];
const greenmile = ["The Green Mile (1999)", "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg", "IMDB #28: 8.6", "3h-", "crime", "1990"];
const tII = ["Terminator 2: Judgment Day (1991)", "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", "IMDB #29: 8.6", "3h", "action", "1990"];
const swIV = ["Star Wars: Episode IV - A New Hope (1977)", "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg", "IMDB #30: 8.6", "3h", "adventure", "1970"];





const theshining = ["The Shining", "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p40_p_v8_ar.jpg", "IMDB #67: 8.4", "3h", "horror", "80s"];
const psycho = ["Psycho", "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", "IMDB #35: 8.5","2h", "horror", "60s"];



var movielist = [test, shawshank, godfather, darkknight, godfatherII, angrymen, schindler, lotrIII, pulpfiction, lotrI, tgbu, forrest, lotrII, fightclub, inception, swV, matrix,
                goodfellas, cuckoo, seven, interstellar , wonderfullife , samurai, silence, privateryan, cityofgod, lifeisbeautiful, duneII, tII, swIV
                , psycho, theshining ];






