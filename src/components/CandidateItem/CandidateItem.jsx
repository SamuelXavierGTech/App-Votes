import React, { useState } from 'react';
import styles from './CandidateItem.module.css'

const CandidateItem = ({key, candidate, editCandidate, removeCandidate}) => {

    const handleRemove = () => {
        removeCandidate(candidate.id)
    }

    const handleVote = () => {
        console.log(candidate.id);
        editCandidate(candidate.id, candidate.votes + 1)
    }
    
    return (
        <div
            className={styles.item}
        >
            <>  
                <p 
                className={styles.itemText}>
                    {candidate.name}
                </p>

                <p 
                className={styles.itemText}	>
                    Votos: {candidate.votes}
                </p>

                <div className={styles.buttons}>
                    <p className={styles.voteButton} onClick={handleVote}>Vote</p>
                    <p className={styles.removeButton} onClick={handleRemove} >X</p>
                </div>
            </>
        </div>
    )
}

export default CandidateItem