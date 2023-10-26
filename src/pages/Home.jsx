import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

const movies = [{"adult":false,"backdrop_path":"/cHNqobjzfLj88lpIYqkZpecwQEC.jpg","id":926393,"title":"The Equalizer 3","original_language":"en","original_title":"The Equalizer 3","overview":"Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.","poster_path":"/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg","media_type":"movie","genre_ids":[28,53,80],"popularity":3403.833,"release_date":"2023-08-30","video":false,"vote_average":7.345,"vote_count":647},{"adult":false,"backdrop_path":"/TFTfzrkX8L7bAKUcch6qLmjpLu.jpg","id":575264,"title":"Mission: Impossible - Dead Reckoning Part One","original_language":"en","original_title":"Mission: Impossible - Dead Reckoning Part One","overview":"Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.","poster_path":"/NNxYkU70HPurnNCSiCjYAmacwm.jpg","media_type":"movie","genre_ids":[28,53],"popularity":961.026,"release_date":"2023-07-08","video":false,"vote_average":7.745,"vote_count":1310},{"adult":false,"backdrop_path":"/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg","id":968051,"title":"The Nun II","original_language":"en","original_title":"The Nun II","overview":"In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.","poster_path":"/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg","media_type":"movie","genre_ids":[27,9648,53],"popularity":2987.798,"release_date":"2023-09-06","video":false,"vote_average":7.005,"vote_count":824},{"adult":false,"backdrop_path":"/mzlZAMjE2yk2sW3f9HTeBM3B3jw.jpg","id":616747,"title":"Haunted Mansion","original_language":"en","original_title":"Haunted Mansion","overview":"A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.","poster_path":"/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg","media_type":"movie","genre_ids":[14,35],"popularity":782.023,"release_date":"2023-07-26","video":false,"vote_average":6.765,"vote_count":387},{"adult":false,"backdrop_path":"/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg","id":980489,"title":"Gran Turismo","original_language":"en","original_title":"Gran Turismo","overview":"The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.","poster_path":"/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg","media_type":"movie","genre_ids":[12,28,18],"popularity":1617.197,"release_date":"2023-08-09","video":false,"vote_average":8.057,"vote_count":960},{"adult":false,"backdrop_path":"/qjMDwBWbG5hAP43q3meplZFreFQ.jpg","id":974931,"title":"Totally Killer","original_language":"en","original_title":"Totally Killer","overview":"When the infamous \"Sweet Sixteen Killer\" returns 35 years after his first murder spree to claim another victim, 17-year-old Jamie accidentally travels back in time to 1987, determined to stop the killer before he can start.","poster_path":"/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg","media_type":"movie","genre_ids":[27,35],"popularity":170.923,"release_date":"2023-09-28","video":false,"vote_average":7.056,"vote_count":151},{"adult":false,"backdrop_path":"/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg","id":346698,"title":"Barbie","original_language":"en","original_title":"Barbie","overview":"Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.","poster_path":"/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg","media_type":"movie","genre_ids":[35,12,14],"popularity":762.191,"release_date":"2023-07-19","video":false,"vote_average":7.255,"vote_count":5308},{"adult":false,"backdrop_path":"/1syW9SNna38rSl9fnXwc9fP7POW.jpg","id":565770,"title":"Blue Beetle","original_language":"en","original_title":"Blue Beetle","overview":"Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.","poster_path":"/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg","media_type":"movie","genre_ids":[28,878,12],"popularity":1350.035,"release_date":"2023-08-16","video":false,"vote_average":7.078,"vote_count":1229},{"adult":false,"backdrop_path":"/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg","id":1151534,"title":"Nowhere","original_language":"es","original_title":"Nowhere","overview":"A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.","poster_path":"/uldNFFKNXNvwss0MIZErMSFkBJZ.jpg","media_type":"movie","genre_ids":[53,18],"popularity":2126.208,"release_date":"2023-09-29","video":false,"vote_average":7.771,"vote_count":509},{"adult":false,"backdrop_path":"/vsrYscw6M5g1OEPxll9QTy6C9IK.jpg","id":830764,"title":"Pet Sematary: Bloodlines","original_language":"en","original_title":"Pet Sematary: Bloodlines","overview":"In 1969, a young Jud Crandall has dreams of leaving his hometown of Ludlow, Maine behind, but soon discovers sinister secrets buried within and is forced to confront a dark family history that will forever keep him connected to Ludlow.","poster_path":"/yqnNLn24shYnZ6kqGpbwuB3NJ0D.jpg","media_type":"movie","genre_ids":[27,14,878],"popularity":104.713,"release_date":"2023-09-23","video":false,"vote_average":6.678,"vote_count":73},{"adult":false,"backdrop_path":"/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg","id":678512,"title":"Sound of Freedom","original_language":"en","original_title":"Sound of Freedom","overview":"The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.","poster_path":"/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg","media_type":"movie","genre_ids":[28,18],"popularity":2027.052,"release_date":"2023-07-03","video":false,"vote_average":8.097,"vote_count":776},{"adult":false,"backdrop_path":"/bHE3eZaSYKwttRVz4sa1Ub5gyMc.jpg","id":961268,"title":"Ballerina","original_language":"ko","original_title":"발레리나","overview":"Grieving the loss of a best friend she couldn't protect, an ex-bodyguard sets out to fulfill her dear friend's last wish: sweet revenge.","poster_path":"/oE7xtGDqZnr7tFHfwb8oM9iRW6H.jpg","media_type":"movie","genre_ids":[28,80,53],"popularity":258.415,"release_date":"2023-10-05","video":false,"vote_average":7.169,"vote_count":81},{"adult":false,"backdrop_path":"/50Wq7fY21obXVRICuljdlSigWvH.jpg","id":910571,"title":"Fair Play","original_language":"en","original_title":"Fair Play","overview":"An unexpected promotion at a cutthroat hedge fund pushes a young couple's relationship to the brink, threatening to unravel not only their recent engagement but their lives.","poster_path":"/tGgojtD6vJKYeCfktAhhA1pmH0n.jpg","media_type":"movie","genre_ids":[53,18],"popularity":179.017,"release_date":"2023-09-28","video":false,"vote_average":6.601,"vote_count":84},{"adult":false,"backdrop_path":"/nrp2khEM6JWFqqNLeub1J6Qafe0.jpg","id":866463,"title":"Reptile","original_language":"en","original_title":"Reptile","overview":"Following the brutal murder of a young real estate agent, a hardened detective attempts to uncover the truth in a case where nothing is as it seems, and by doing so dismantles the illusions in his own life.","poster_path":"/soIgqZBoTiTgMqUW0JtxsPWAilQ.jpg","media_type":"movie","genre_ids":[53,80,18,9648],"popularity":200.625,"release_date":"2023-09-29","video":false,"vote_average":6.99,"vote_count":259},{"adult":false,"backdrop_path":"/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg","id":670292,"title":"The Creator","original_language":"en","original_title":"The Creator","overview":"Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.","poster_path":"/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg","media_type":"movie","genre_ids":[878,28,53],"popularity":252.894,"release_date":"2023-09-27","video":false,"vote_average":7.2,"vote_count":321},{"adult":false,"backdrop_path":"/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg","id":1008042,"title":"Talk to Me","original_language":"en","original_title":"Talk to Me","overview":"When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.","poster_path":"/kdPMUMJzyYAc4roD52qavX0nLIC.jpg","media_type":"movie","genre_ids":[27,53],"popularity":2039.201,"release_date":"2023-07-26","video":false,"vote_average":7.267,"vote_count":1210},{"adult":false,"backdrop_path":"/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg","id":951491,"title":"Saw X","original_language":"en","original_title":"Saw X","overview":"Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.","poster_path":"/w54xXtX9B9zZnE31OcMHqi2WIST.jpg","media_type":"movie","genre_ids":[27,53],"popularity":651.057,"release_date":"2023-09-26","video":false,"vote_average":7.3,"vote_count":123},{"adult":false,"backdrop_path":"/f33XdT6dwNXmXQNvQ4FuyhQrUob.jpg","id":807172,"title":"The Exorcist: Believer","original_language":"en","original_title":"The Exorcist: Believer","overview":"When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.","poster_path":"/lxRLC3WOFM2INoyEa3bFGIUApvn.jpg","media_type":"movie","genre_ids":[27],"popularity":546.937,"release_date":"2023-10-04","video":false,"vote_average":5.303,"vote_count":61},{"adult":false,"backdrop_path":"/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg","id":820609,"title":"No One Will Save You","original_language":"en","original_title":"No One Will Save You","overview":"An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.","poster_path":"/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg","media_type":"movie","genre_ids":[27,878,53],"popularity":422.768,"release_date":"2023-09-22","video":false,"vote_average":6.95,"vote_count":505},{"adult":false,"backdrop_path":"/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg","id":820525,"title":"After Everything","original_language":"en","original_title":"After Everything","overview":"Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.","poster_path":"/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg","media_type":"movie","genre_ids":[10749,18],"popularity":1010.315,"release_date":"2023-09-13","video":false,"vote_average":6.89,"vote_count":240}]

const Home = () => {
  return (
    <MovieGrid movies={movies} />
  )
}
export default Home;