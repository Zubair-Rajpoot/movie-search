import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <>
            <div className='w-48 h-96 text-center bg-white/30 rounded-lg m-4 hover:scale-95'>
                <img className='h-3/4 p-2' src={movie.Poster} alt={movie.Title} />
                <p className='text-sm'>Title: {movie.Title}</p>
                <p className='text-sm'>Type: {movie.Type}</p>
                <p className='text-sm'>Year: {movie.Year}</p>
            </div>
        </>
    )
}
export default MovieCard;