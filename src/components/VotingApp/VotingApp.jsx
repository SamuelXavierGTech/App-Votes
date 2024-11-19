import React, { useState, useEffect } from 'react';
import styles from './VotingApp.module.css'

import CandidateForm from '../CadidateForm/CandidateForm'
import CandidateList from '../CandidateList/CandidateList'
import VotesSummary from '../VotesSummary/VotesSummary'

const VotingApp = ({}) => {
    const [candidates, setCandidates] = useState(() => {
        const savedCandidates = localStorage.getItem('candidates');
        return savedCandidates ? JSON.parse(savedCandidates) : [];
    });

    const addCandidate = (name) => {
        const newCandidate = {
            id: Date.now(),
            name,
            votes: 0
        }

        setCandidates([...candidates, newCandidate])
    }

    const editCandidate = (candidateId, newVote) => {
        setCandidates(
            candidates.map((candidate) => {
                candidate.id === candidateId ? { ...candidates, votes: newVote } : candidate
            })
        );
    }

    const removeCandidate = (candidateId) => {
        const updatedCandidates = candidates.filter((candidate) => candidate.id !== candidateId)
        setCandidates(updatedCandidates)
    }

    useEffect(() => {
        localStorage.setItem('candidates', JSON.stringify(candidates));
    }, [candidates]);

    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                    <p className={styles.title}>Sistema de Votação</p>
                </div>
                <CandidateForm addCandidate={addCandidate} />
                <CandidateList 
                candidates={candidates}
                editCandidate={editCandidate} 
                removeCandidate={removeCandidate}
                />
                <VotesSummary candidates={candidates} />
            </div>
        </div>
    )
}

export default VotingApp