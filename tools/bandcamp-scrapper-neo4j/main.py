

from neomodel import db
from bandcamp_scraper import getFanAlbums, getGenreAlbums, updateFans
import db_transcations as dbt
import numpy as np

import multiprocessing as mp


# WORKFLOW #1, Scrape from an Album
url = "https://overmono.bandcamp.com/album/bmw-track-so-u-kno"
getFanAlbums(url, n =300)

# WORKFLOW #2, Scrape from a tag/genre
tags = ["acid","breakbeat","bass","ambient","spain","madrid","granada","chicago-house"] #["house","electronica","downtempo","breaks","electro","dubstep","beats","dance","idm","drum & bass"]#,"techno","trance","glitch","chiptune","chillwave","dub","edm","instrumental","witch house","garage","juke","footwork","electronic"]

#if __name__ == '__main__':
 #   pool = mp.Pool(mp.cpu_count())
  #  results = [pool.map(getGenreAlbums, [tag for tag in tags])]
   # results = [pool.map(getFanAlbums, [u for u in url])]
    #pool.close()
     #updateFans()


#from models import Album
#from rec_engine import simpleRecEngine

#simpleRecEngine(startingAlbum = getAlbum("https://tonerca.bandcamp.com/album/tar"))
    