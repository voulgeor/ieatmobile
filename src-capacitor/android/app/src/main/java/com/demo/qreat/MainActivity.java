package com.demo.qreat;

import com.getcapacitor.BridgeActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Toast;

import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.community.facebooklogin.FacebookLogin;

import java.util.List;

public class MainActivity extends BridgeActivity {
    @Override
     public void onCreate(Bundle savedInstanceState) {
      registerPlugin(FacebookLogin.class);
      super.onCreate(savedInstanceState);
      registerPlugin(GoogleAuth.class);
      setContentView(R.layout.activity_main);
      // ATTENTION: This was auto-generated to handle app links.
      Intent appLinkIntent = getIntent();
      String appLinkAction = appLinkIntent.getAction();
      Uri appLinkData = appLinkIntent.getData();

      if(appLinkData != null){
        List<String> params = appLinkData.getPathSegments();
        String uuid = params.get(params.size()-1);
        Toast.makeText(this,"uuid="+uuid, Toast.LENGTH_SHORT).show();
      }
    }
 }
