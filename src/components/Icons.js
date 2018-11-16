
import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon';
import { home, man, key, edit } from 'react-icons-kit/entypo';

const GoldIconContainer = 
withBaseIcon({ size: 32, style: { display: 'inline-block', color: '#EABF60' }});
const GoldIconSmallContainer = 
withBaseIcon({ size: 20, style: { display: 'inline-block', color: '#EABF60' }});

const BlueIconContainer = 
withBaseIcon({ size: 32, style: { display: 'inline-block', color: 'blue' }});
const GreenIconContainer = 
withBaseIcon({ size: 32, style: { display: 'inline-block', color: 'green' }});


// User Icon
export const UserIcon = () => <GoldIconContainer icon={user} />

// Key Icon
export const KeyIcon = () => <GoldIconSmallContainer icon={key} />

// Blue home Icon (for hosts)
export const BlueHomeIcon = () => <BlueIconContainer icon={home} />
// Green home Icon (for facilitators)
export const GreenHomeIcon = () => <GreenIconContainer icon={home} />

// Blue man Icon (for facilitators)
export const BlueManIcon = () => <BlueIconContainer icon={man} />
// Blue man Icon (for facilitators)
export const GreenManIcon = () => <GreenIconContainer icon={man} />

// Blue Edit Icon
export const BlueEditIcon = () => <BlueIconContainer icon={edit} />