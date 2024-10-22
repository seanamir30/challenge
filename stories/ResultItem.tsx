import React from 'react';
import './result-item.css';

const results = [
    {
        title: 'Abstract Screening',
        clinicalTrial: 'Yes',
        disease: 'Unsure',
        intervention: 'Unsure',
        outcome: 'No',
        treatment: 'No',
    },
    {
        title: 'Full Text Review',
        clinicalTrial: 'No',
        disease: 'Yes',
        intervention: 'Yes',
        outcome: 'Unsure',
        treatment: 'No',
    },
]

interface IResultItem {
}

const ResultItem: React.FC<IResultItem> = () => (
    <div className='container'>
        <div className='heading-container'>
            <div className='heading-content'>
                <p className='pmid'>PMID: 34483505</p>
                <h4 className='headline'>A pandemic of acute respiratory distress syndrome-role of <strong>lung transplant</strong> in <strong>coronavirus</strong> disease-2019-associated respiratory failure</h4>
            </div>
            <div className='content-label'>
                <img className='x-icon' src='/X.svg' />
                <p className='label-name'>AI Excluded</p>
            </div>
        </div>
        <p className='summary'><strong>Sumary: </strong>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. </p>
        <div className='tag-results'>
            {results.map((result, index) => (
                <div className='tag-result-container'>
                    <p className='tag-result-title'>{result.title}</p>
                    <div className='tags'>
                        <Tags className='clinical-trial' TagTitle='Clinical Trial' TagContent={result.clinicalTrial} />
                        <Tags className='disease' TagTitle='Disease' TagContent={result.disease} />
                        <Tags className='intervention' TagTitle='Intervention' TagContent={result.intervention} />
                        <Tags className='outcome' TagTitle='Outcome' TagContent={result.outcome} />
                        <Tags className='treatment' TagTitle='Treatment' TagContent={result.treatment} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

interface ITag {
    className: string;
    TagTitle: string;
    TagContent: string;
}

const Tags: React.FC<ITag> = ({className= '', TagTitle, TagContent}) => {
    return (
        <div className={className + ' tag-container'}>
            <strong>{TagTitle}: </strong>
            {TagContent}
        </div>
    )
}

export default ResultItem;