import React, {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";

const Message = (props) => {

    const [direction, setDirection] = useState('');

    useEffect(() => {
        if (props?.direction === 'right') {
            setDirection('justify-content-end');
        }
    }, []);


    return (
        <div className='w-auto h-auto'>
            <div className={'d-flex mt-2 rounded-3 ' + direction}>
                <div className='m-3 p-4 rounded-3' style={{
                    width: '35vw',
                    background: '#F3F2F1'
                }}>
                    <div className='d-flex align-items-center'>
                        <Avatar
                            alt={props.name}
                            src={props.avatar}
                            sx={{width: 24, height: 24}}
                        />
                        <Typography variant="caption" className="ms-2"> <b> {props.name} </b> </Typography>
                    </div>

                    <div className='mt-1'>

                        <Typography variant="body1"> {props.message} </Typography>

                        <div className='d-flex justify-content-end'>
                            <Moment style={{
                                fontSize: '12px',
                                color: '#8c8c8c',
                                fontWeight: '400'
                            }} format="YYYY-MM-DD hh:mm">
                                {props.time}
                            </Moment>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Message
