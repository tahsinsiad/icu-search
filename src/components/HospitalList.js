import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { useStyles } from '../styles/hospitalListStyle';
import { green } from '@material-ui/core/colors';

export default function HospitalList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
          primary={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: '0', textTransform: 'capitalize' }}>
                Dhaka medical college
              </h2>
              <div style={{ display: 'flex' }}>
                <CallRoundedIcon
                  style={{
                    color: green[500],
                    marginRight: '20px',
                    borderRadius: '100%',
                  }}
                />
                <LocationOnRoundedIcon style={{ color: '#282c34' }} />
              </div>
            </div>
          }
          secondary={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ color: '#282c34' }}>Total seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#282c34',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: '#f00' }}>Occupied seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#f00',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: green[600] }}>Available seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: green[600],
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
          primary={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: '0', textTransform: 'capitalize' }}>
                Dhaka medical college
              </h2>
              <div style={{ display: 'flex' }}>
                <CallRoundedIcon
                  style={{
                    color: green[500],
                    marginRight: '20px',
                    borderRadius: '100%',
                  }}
                />
                <LocationOnRoundedIcon style={{ color: '#282c34' }} />
              </div>
            </div>
          }
          secondary={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ color: '#282c34' }}>Total seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#282c34',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: '#f00' }}>Occupied seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#f00',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: green[700] }}>Available seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: green[700],
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
          primary={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: '0', textTransform: 'capitalize' }}>
                Dhaka medical college
              </h2>
              <div style={{ display: 'flex' }}>
                <CallRoundedIcon
                  style={{
                    color: green[500],
                    marginRight: '20px',
                    borderRadius: '100%',
                  }}
                />
                <LocationOnRoundedIcon style={{ color: '#282c34' }} />
              </div>
            </div>
          }
          secondary={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ color: '#282c34' }}>Total seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#282c34',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: '#f00' }}>Occupied seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: '#f00',
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '20px',
                }}
              >
                <h3 style={{ color: green[600] }}>Available seats</h3>
                <span
                  style={{
                    fontSize: '18px',
                    color: green[600],
                    fontWeight: '700',
                  }}
                >
                  100
                </span>
              </div>
            </div>
          }
        />
      </ListItem>
    </List>
  );
}
