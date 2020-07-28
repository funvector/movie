import React, { useState, useCallback }  from 'react'
import classes from './App.module.css'
import MovieList from '../MovieList'
import AddForm from '../AddForm'
import SearchInputField from '../InputField/SearchMovieInput/'
import StatusFilter from '../InputField/StatusFilter/'

const App = () => {

  const [state, setState] = useState({
    active: '',
    unWatched: false,
    title: '',
    isCheked: false,
    list: []
  })

  const fetchData = useCallback(async (movieSearchTitle) => {
    try {
      const request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d483ba30615bb414749f5aa3735fc97&language=en-US&query=${movieSearchTitle}&page=1&include_adult=false`)
      const response = await request.json()
      const data = response.results.slice(0, 1).map((elem) => {
        return {
          title: elem.title,
          date: elem.release_date,
          imdb: elem.vote_average,
          id: elem.id,
          overview: elem.overview,
          watched: false,
          isCardOpen: false,
        }
      })
      setState((prevState) => ({
        ...prevState, list: [...prevState.list, ...data]
      }))
    } catch (error) {
      console.error(error)
    }
  }, [])

  const onSearchChange = (titleValue) => {
    setState((prevState) => ({
      ...prevState, title: titleValue
    }))
  }

  const onChangeFilterValue = (active) => {
    (active === 'watched')
    ? setState((prevState) => ({
      ...prevState, active: active, watched: true, unWatched: false
    }))
    : setState((prevState) => ({
      ...prevState, active: active,  unWatched: true, watched: false
    }))
  }

  const filter = (items, filter) => {
    switch (filter) {
      case 'watched':
        return items.filter((item) => item.watched === true)
        break;
      case 'unWatched':
        return items.filter((item) => item.watched === false)
        break;
      default:
        return items
    }
  }

  const seacrh = (items, title) => {
    if(!title.trim().length) {
      return items
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1
    })
  }

  const visibleItems = filter(seacrh(state.list, state.title), state.active)

  const addMovie = (movieTitle) => {  
    if (state.list.length && state.list.some((elem) => elem.title.trim().toLowerCase() === movieTitle.trim().toLowerCase())) {
      alert(`You also added this movie to list!`)
      return;
    } 
    fetchData(movieTitle)
  }

  const isCardOpenHandler = (id) => {
    const newMovies = state.list.map((item) => {
      if (item.id === id){
        item.isCardOpen = !item.isCardOpen
      }
      return item
    })
    setState((prevState) => ({
      ...prevState, list: newMovies
    }))
  }

  const onCheckBoxdChangeHandler = (id) => {
    const newMovies = state.list.map((item) => {
      if (item.id === id){
        item.watched = !item.watched
      }
      return item
    })
    setState((prevState) => ({
      ...prevState, list: newMovies
    }))
  }

  return (
    <div className={classes.App}>
      <AddForm 
        onSubmitHandler={addMovie}
      />
      <div className={classes.container}>
        <div className={classes.containerButtons}>
            <StatusFilter 
              status={state.watched}
              watched='watched'
              onChangeFilterValue={onChangeFilterValue}
            />
            <StatusFilter 
            status={state.unWatched}
            watched='unWatched'
            onChangeFilterValue={onChangeFilterValue}
          />
        </div>
        <div className={classes.conteinerInputSearch}>
          <SearchInputField 
            placeholder='Tap to search!'
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
      <div>
        <MovieList 
          movies={visibleItems} 
          isOpen={state.isCardOpen}
          onChange={isCardOpenHandler}
          isCheked={onCheckBoxdChangeHandler}
        />
      </div>
    </div>
  )
}

export default App
