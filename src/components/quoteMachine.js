import React from 'react';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
	<div className="box">
        {
        	props.selectedQuote ? 
        	(
        	<>
        	 <p id="text">{`"${props.selectedQuote.quote}"`}</p> 
        	 <p id="author"> -{props.selectedQuote.author}</p>
        	 </>
        	) : null
        }
        <button>
        	<a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`}>
        	<FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
        	</a>
        </button>
        <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex}/>
        
    </div>	
    );

export default QuoteMachine;
