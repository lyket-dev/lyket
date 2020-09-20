import React from 'react';
import { Client } from '../Client';

export const ClientContext = React.createContext<Client | null>(null);
