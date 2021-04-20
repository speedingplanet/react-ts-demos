import React, { useState, useEffect, useRef } from 'react';
import { testUrl } from '@speedingplanet/rest-server';

export default function CancelPromise(): JSX.Element {
  const [ output, setOutput ] = useState( '' );
  const requestRef = useRef( 0 );
  const controller = new AbortController();

  useEffect( () => {
    if ( requestRef.current ) {
      console.log( 'Component: fired request' );
      requestRef.current = 0;
      fetch( `${testUrl}?_delay=3000`, { signal: controller.signal } )
        .then( ( response ) => {
          console.log( 'Parsing JSON' );
          return response.json();
        } )
        .then( ( person ) =>
          setOutput( 'Requested person: ' + JSON.stringify( person, null, 2 ) ),
        )
        .catch( ( error ) => {
          console.error( 'Error: ', error );
          if ( DOMException.prototype.isPrototypeOf( error ) ) {
            setOutput( `Canceled request #${requestRef.current}: ${error}` );
          } else {
            setOutput( 'Something else went wrong: ' + JSON.stringify( error ) );
          }
        } );
    }
  }, [ output, controller.signal ] );

  const makeRequest = () => {
    requestRef.current = requestRef.current + 1;
    setOutput( 'Making request....' );
  };

  const cancelRequest = () => {
    console.log( 'Component: Canceling request' );
    controller.abort();
  };

  return (
    <div>
      <p>
        Click the "Start" button below to kick off a slow request. Then click
        the "Cancel" button to cancel the request. Change the duration of the
        request in the duration field.
      </p>
      <form>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={makeRequest}
          >
            Start
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-warning"
            onClick={cancelRequest}
          >
            Cancel
          </button>
        </div>
      </form>
      <div>
        <p>Output: </p>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
