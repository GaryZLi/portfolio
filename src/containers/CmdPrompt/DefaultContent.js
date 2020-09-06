import React from 'react';

const DefaultContent = () => {
    return (
        <div>
            <div style={{ height: '5px' }} />
            {'C:\\src>g++ -o main main.cpp'}
            <div style={{ height: '5px' }} />
            {'C:\\src>./main'}
            <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Name</span>: Gary Li
                <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Age</span>: {new Date().getFullYear() - 1997}
                <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Education</span>: University of California, Irvine
                <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Major</span>: Computer Science
                <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Skills</span>: C&ensp;|&ensp;C++&ensp;|&ensp;Python&ensp;|&ensp;Java&ensp;|&ensp;NodeJS&ensp;|&ensp;HTML&ensp;|&ensp;CSS&ensp;|&ensp;JavaScript&ensp;|&ensp;ReactJS&ensp;|&ensp;React Native
                <div style={{ height: '5px' }} />
            <span style={{ textDecoration: 'underline' }}>Hobbies</span>: Skateboarding&emsp;|&emsp;Breakdancing&emsp;|&emsp;Running&emsp;|&emsp;Swimming&emsp;|&emsp;Eating
                <div style={{ height: '5px' }} />
            {/* <span style={{textDecoration: 'underline'}}>Resume</span>: <span className='resume' onClick={() => this.props.switchProject('resume')}>Gary Li's Resume</span> */}
            <div style={{ height: '5px' }} />
        </div>
    );
};

export default DefaultContent;