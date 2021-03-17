import React, {FC} from 'react';


interface DisplayProps {
    value: string
}

export const Screen: FC<DisplayProps> = ({value}) => {
    return (
        <div>{value}</div>
    )
};