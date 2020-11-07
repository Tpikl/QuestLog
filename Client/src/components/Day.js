import React from 'react';
import { format } from 'date-fns';
import { Entry } from './Entry';
import './Day.scss';

export const Day = (props) => {
    // Come back to this ---
    // const [entries, setEntries] = useState(props.entries);
    // useEffect(() => {
    //     setEntries(props.entries);
    // }, [props.entries]);
    return (
        <div className='day'>
            <div className='dayHeader'>
                <h3>{format(props.day, 'do - eeee')}</h3>
                <button onClick={props.addEntry}>Add</button>
            </div>
            <hr />

            <b>Entries:</b>
            <div className='entries'>
                <ul>
                    {props.entries.map(x => {return (
                        <Entry key={x.id} entry={x} update={props.update} setFormEntry={props.editEntry} />
                    )})}
                </ul>
            </div>

        </div>
    );
}