import React, { useEffect, useState } from 'react';

const SkillLevel = ({level}) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
        let timer;

        const changeLevel = () => {
            if (currentLevel < level) {
                setTimeout(() => setCurrentLevel(prev => prev + 1), ~~((level / (level * 0.035))));
            }
        };

        changeLevel();

        return () => clearTimeout(timer);

    }, [currentLevel, setCurrentLevel, level]);

    return (
        <div>
            {`${currentLevel}%`}
        </div>
    )
};

export default SkillLevel;