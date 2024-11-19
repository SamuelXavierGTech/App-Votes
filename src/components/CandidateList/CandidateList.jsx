import React, { useState } from 'react';
import styles from './CandidateList.module.css'
import CandidateItem from '../CandidateItem/CandidateItem'

const CandidateList = ({candidates, editCandidate, removeCandidate}) => {
    console.log(candidates);
    return (
        <div className={styles.allTasks}>
            <ul className={styles.tasks}>
                {candidates.map((candidate) => (
                    <li key={candidate.id} className={styles.item}> 
                        <CandidateItem 
                            candidate={candidate}
                            editCandidate={editCandidate}
                            removeCandidate={removeCandidate}
                        /> 
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default CandidateList