import React, { useState, useEffect } from 'react';

function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchQuote = () => {
    setLoading(true);
    setError(null);

    // 1. Create a unique callback name
    const callbackName = 'jsonpCallback_' + Date.now();

    // 2. Create the script tag
    const script = document.createElement('script');
    script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=${callbackName}`;

    // 3. Set a timeout in case API hangs
    const timeout = setTimeout(() => {
        cleanup();
        setError('Request timed out. Try again!');
        setLoading(false);
    }, 5000);

    // 4. Define the global callback the API will call
    window[callbackName] = (data) => {
        cleanup();
        if (data && data.quoteText) {
        setQuote(data);
        } else {
        setError('Empty quote received. Try again!');
        }
        setLoading(false);
    };

    // 5. Cleanup function — remove script tag and callback
    const cleanup = () => {
        clearTimeout(timeout);
        delete window[callbackName];
        if (document.body.contains(script)) {
        document.body.removeChild(script);
        }
    };

    // 6. Handle script load error
    script.onerror = () => {
        cleanup();
        setError('Failed to load quote. Try again!');
        setLoading(false);
    };

    // 7. Inject the script — this triggers the API call
    document.body.appendChild(script);
    };

  useEffect(() => {
    fetchQuote();   // fetch once on mount
  }, []);

  if (loading) return <p>Loading quote...</p>;
  if (error)   return <p>{error}</p>;

    return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4 text-center">
            <h2 className="mb-4">💬 Quote of the Day</h2>

            {loading && (
              <div className="d-flex justify-content-center my-3">
                <div className="spinner-border text-secondary" role="status" />
              </div>
            )}

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            {quote && !loading && (
              <blockquote className="blockquote">
                <p className="mb-3 fs-5 fst-italic">"{quote.quoteText}"</p>
                <footer className="blockquote-footer mt-2">
                  {quote.quoteAuthor || 'Unknown'}
                </footer>
              </blockquote>
            )}

            <button
              className="btn btn-dark mt-3"
              onClick={fetchQuote}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'New Quote'}
            </button>
          </div>

        </div>
      </div>
    </div>
    );
}

export default QuoteApp;