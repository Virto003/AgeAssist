import React from 'react';
import { WebView } from 'react-native-webview';

function TicTacToe() {
  return (
    <WebView
      source={{ uri: 'https://solitaires-online.com/tic-tac-toe/#id=4163gcvbr9,no-nav,no-article,no-feedback,no-ads' }}
      style={{ width: 720, height: 360 }}
    />
  );
}

export default TicTacToe;
