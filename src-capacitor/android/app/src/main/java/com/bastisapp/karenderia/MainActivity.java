package com.bastisapp.karenderia;

import com.getcapacitor.BridgeActivity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

 public class MainActivity extends BridgeActivity {
    @Override
     public void onCreate(Bundle savedInstanceState) {
        registerPlugin(com.getcapacitor.community.facebooklogin.FacebookLogin.class);
        super.onCreate(savedInstanceState);
        registerPlugin(GoogleAuth.class);
      // ATTENTION: This was auto-generated to handle app links.
      Intent appLinkIntent = getIntent();
      String appLinkAction = appLinkIntent.getAction();
      Uri appLinkData = appLinkIntent.getData();
     }
 }

