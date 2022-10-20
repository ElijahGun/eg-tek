import './error-page.scss';

export const ErrorPage = () => {
  return (
    <div className='error-page'>
        <div className="error-page__container">
        <h1 className='error-page__heading'>Oops!</h1>
        <p className='error-page__text'>something went wrong! Please try another resource!</p>
        </div>
    </div>
  )
}
