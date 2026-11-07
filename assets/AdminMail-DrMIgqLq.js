import{i as I,r as d,s as m,g as L,j as e,I as o,t as U}from"./index-CQuGcZ4R.js";const C=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Добро пожаловать на SafiMine!</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Добро пожаловать на SafiMine!</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Вы зарегистрировались на <b style="color:#ecfffd">safimine.ru</b>. Подтвердите почту — и аккаунт готов: привязка ника, покупки, форум и заявки в команду.</p>\r
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:999px;background:linear-gradient(135deg,#00B5CF,#35E6FF);background-color:#1fcfe6">\r
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 30px;font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#042a30;text-decoration:none;border-radius:999px">Подтвердить почту</a></td></tr></table>\r
      <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6;color:#5f8a90">Кнопка не работает? Скопируйте ссылку в браузер:</p>\r
      <p style="margin:0 0 18px;font-size:12px;line-height:1.5;word-break:break-all"><a href="{{ .ConfirmationURL }}" style="color:#35E6FF;text-decoration:none">{{ .ConfirmationURL }}</a></p>\r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Если вы не регистрировались на SafiMine, просто проигнорируйте это письмо.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,R=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Сброс пароля</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Сброс пароля</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Кто-то (надеемся, вы) запросил сброс пароля для аккаунта <b style="color:#ecfffd">{{ .Email }}</b> на SafiMine.</p><p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Нажмите кнопку и придумайте новый пароль. Ссылка действует ограниченное время.</p>\r
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:999px;background:linear-gradient(135deg,#00B5CF,#35E6FF);background-color:#1fcfe6">\r
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 30px;font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#042a30;text-decoration:none;border-radius:999px">Задать новый пароль</a></td></tr></table>\r
      <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6;color:#5f8a90">Кнопка не работает? Скопируйте ссылку в браузер:</p>\r
      <p style="margin:0 0 18px;font-size:12px;line-height:1.5;word-break:break-all"><a href="{{ .ConfirmationURL }}" style="color:#35E6FF;text-decoration:none">{{ .ConfirmationURL }}</a></p>\r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Не запрашивали сброс? Ничего не делайте — пароль останется прежним. Если такие письма приходят часто, напишите в поддержку.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,$=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Ссылка для входа</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Ссылка для входа</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Нажмите кнопку, чтобы войти в аккаунт SafiMine без пароля.</p>\r
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:999px;background:linear-gradient(135deg,#00B5CF,#35E6FF);background-color:#1fcfe6">\r
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 30px;font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#042a30;text-decoration:none;border-radius:999px">Войти на сайт</a></td></tr></table>\r
      <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6;color:#5f8a90">Кнопка не работает? Скопируйте ссылку в браузер:</p>\r
      <p style="margin:0 0 18px;font-size:12px;line-height:1.5;word-break:break-all"><a href="{{ .ConfirmationURL }}" style="color:#35E6FF;text-decoration:none">{{ .ConfirmationURL }}</a></p>\r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Если вы не пытались войти, проигнорируйте письмо — без ссылки в аккаунт не попасть.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,T=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Подтвердите новую почту</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Подтвердите новую почту</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Вы меняете почту аккаунта SafiMine с <b style="color:#ecfffd">{{ .Email }}</b> на <b style="color:#ecfffd">{{ .NewEmail }}</b>. Введите этот код на сайте:</p><div style="margin:4px 0 22px;padding:18px;border-radius:18px;background:#04151a;border:1px solid rgba(53,230,255,.3);text-align:center;font-family:Consolas,monospace;font-size:34px;font-weight:900;letter-spacing:10px;color:#35E6FF">{{ .Token }}</div>\r
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:999px;background:linear-gradient(135deg,#00B5CF,#35E6FF);background-color:#1fcfe6">\r
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 30px;font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#042a30;text-decoration:none;border-radius:999px">Подтвердить по ссылке</a></td></tr></table>\r
      <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6;color:#5f8a90">Кнопка не работает? Скопируйте ссылку в браузер:</p>\r
      <p style="margin:0 0 18px;font-size:12px;line-height:1.5;word-break:break-all"><a href="{{ .ConfirmationURL }}" style="color:#35E6FF;text-decoration:none">{{ .ConfirmationURL }}</a></p>\r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Если вы не меняли почту, срочно смените пароль и напишите в поддержку.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,_=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Вас пригласили на SafiMine</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Вас пригласили на SafiMine</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Вас пригласили создать аккаунт на <b style="color:#ecfffd">safimine.ru</b>. Нажмите кнопку, чтобы принять приглашение и задать пароль.</p>\r
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px"><tr><td style="border-radius:999px;background:linear-gradient(135deg,#00B5CF,#35E6FF);background-color:#1fcfe6">\r
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 30px;font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#042a30;text-decoration:none;border-radius:999px">Принять приглашение</a></td></tr></table>\r
      <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6;color:#5f8a90">Кнопка не работает? Скопируйте ссылку в браузер:</p>\r
      <p style="margin:0 0 18px;font-size:12px;line-height:1.5;word-break:break-all"><a href="{{ .ConfirmationURL }}" style="color:#35E6FF;text-decoration:none">{{ .ConfirmationURL }}</a></p>\r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Если вы не ждали приглашения, проигнорируйте письмо.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,B=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>Код подтверждения</title></head>\r
<body style="margin:0;padding:0;background:#020b0d">\r
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020b0d;background-image:radial-gradient(ellipse at 80% 0%,rgba(53,230,255,.16),transparent 60%)">\r
<tr><td align="center" style="padding:32px 14px">\r
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">\r
    <tr><td style="padding:0 6px 18px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>\r
      <td><img src="https://safimine.ru/favicon.png" width="40" height="40" alt="SafiMine" style="display:block;border-radius:12px;border:1px solid rgba(53,230,255,.35)"></td>\r
      <td style="padding-left:12px;font-family:Arial,sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#35E6FF">SAFIMINE</td></tr></table></td></tr>\r
    <tr><td style="background:#071a1f;border:1px solid rgba(140,255,240,.12);border-radius:24px;padding:34px 30px;font-family:Arial,sans-serif">\r
      <div style="height:4px;width:56px;border-radius:4px;background:linear-gradient(90deg,#00B5CF,#35E6FF);background-color:#35E6FF;margin-bottom:22px"></div>\r
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;font-weight:900;color:#ecfffd">Код подтверждения</h1>\r
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">Вы меняете пароль аккаунта SafiMine. Введите этот код на сайте, чтобы подтвердить, что это вы:</p><div style="margin:4px 0 22px;padding:18px;border-radius:18px;background:#04151a;border:1px solid rgba(53,230,255,.3);text-align:center;font-family:Consolas,monospace;font-size:34px;font-weight:900;letter-spacing:10px;color:#35E6FF">{{ .Token }}</div>\r
      \r
      <div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;line-height:1.6;color:#5f8a90">Если вы ничего не меняли, кто-то знает ваш пароль: срочно смените его и напишите в поддержку.</div>\r
    </td></tr>\r
    <tr><td style="padding:20px 10px 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#5f8a90;text-align:center">\r
      SafiMine · гриф-сервер Minecraft · <a href="https://safimine.ru" style="color:#35E6FF;text-decoration:none">safimine.ru</a> · IP mc.safimine.ru<br>\r
      Вопросы — <a href="mailto:support@safimine.ru" style="color:#35E6FF;text-decoration:none">support@safimine.ru</a>\r
    </td></tr>\r
  </table>\r
</td></tr></table></body></html>\r
`,P="Подтвердите e-mail",D="Сброс пароля",H="Вход на SafiMine",K="Смена e-mail на SafiMine",q="Код подтверждения SafiMine",O="Приглашение на SafiMine",N={confirm:P,recovery:D,magic_link:H,email_change:K,reauthentication:q,invite:O},b=[["all","Все игроки с подтверждённой почтой"],["buyers","Покупатели доната"],["staff","Команда проекта (хелпер+)"]],E=[["confirm","Подтверждение регистрации",C],["recovery","Сброс пароля",R],["magic_link","Вход по ссылке",$],["email_change","Смена e-mail",T],["reauthentication","Код для смены пароля",B],["invite","Приглашение",_]],u=r=>r.replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]),V=(r,s)=>u(r.replace(/\{nick\}/g,s)).split(/\n{2,}/).map(c=>`<p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#b8d4d8">${c.replace(/\*\*(.+?)\*\*/g,'<b style="color:#ecfffd">$1</b>').replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" style="color:#35E6FF;font-weight:700;text-decoration:none">$1</a>').replace(/\n/g,"<br>")}</p>`).join(""),W=r=>C.replace(/<h1([^>]*)>[^<]*<\/h1>/,`<h1$1>${u((r.title||r.subject).replace(/\{nick\}/g,"Steve"))}</h1>`).replace(/(<\/h1>)[\s\S]*?(<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px">)/,`$1${V(r.body,"Steve")}$2`).replace(/\{\{ \.ConfirmationURL \}\}/g,r.url||"#").replace(/>Подтвердить почту</,`>${u(r.button||"Открыть сайт")}<`).replace(/<p style="margin:0 0 6px[\s\S]*?<\/div>/,'<div style="border-top:1px solid rgba(140,255,240,.1);padding-top:16px;font-size:12.5px;color:#5f8a90">Не хотите получать письма? Отключите рассылку в личном кабинете.</div>');function Q(){const r=I(),[s,c]=d.useState("send"),[g,y]=d.useState([]),[a,x]=d.useState(null),[h,S]=d.useState("all"),[f,j]=d.useState(""),[v,z]=d.useState("confirm");d.useEffect(()=>{m.from("settings").select("value").eq("key","mail_templates").maybeSingle().then(({data:t})=>{const n=(t==null?void 0:t.value)??[];y(n),x(n[0]??null)})},[]);const{data:F,reload:k}=L(async()=>(await m.from("mail_campaigns").select("*").order("created_at",{ascending:!1}).limit(30)).data??[],[],[s]),M=d.useMemo(()=>a?W(a):"",[a]),p=t=>x(n=>n&&{...n,...t}),w=async t=>{var i;if(!a||!t&&!G(`Отправить «${a.subject}» — ${(i=b.find(([l])=>l===h))==null?void 0:i[1].toLowerCase()}?`))return;j(t?"test":"all");const n=await U("send-mail",{...a,audience:h,test:t}).catch(l=>({error:l.message}));if(j(""),n.error)return r(n.error,"err");r(t?`Тестовое письмо отправлено (${n.sent}/${n.recipients})`:`Рассылка запущена: ${n.recipients} получателей`,"info"),t||(c("history"),k())},A=async()=>{if(!a)return;const t=g.some(i=>i.id===a.id)?g.map(i=>i.id===a.id?a:i):[...g,a],{error:n}=await m.from("settings").upsert({key:"mail_templates",value:t,updated_at:new Date().toISOString()});if(n)return r(n.message,"err");y(t),r("Шаблон сохранён")};return e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("h2",{className:"text-xl font-extrabold mr-auto",children:"Рассылки и письма"}),[["send","Рассылка","send"],["auth","Письма аккаунта","mail"],["history","История","clock"]].map(([t,n,i])=>e.jsxs("button",{className:"pill "+(s===t?"on":""),onClick:()=>c(t),children:[e.jsx(o,{n:i,s:14}),n]},t))]}),s==="send"&&e.jsxs("div",{className:"grid xl:grid-cols-[1fr_1fr] gap-4 items-start",children:[e.jsxs("div",{className:"card p-5 grid gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Шаблон"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.map(t=>e.jsx("button",{className:"pill "+((a==null?void 0:a.id)===t.id?"on":""),onClick:()=>x(t),children:t.name},t.id)),e.jsxs("button",{className:"pill",onClick:()=>x({id:"tpl"+Date.now(),name:"Новый шаблон",subject:"",title:"",body:`Привет, {nick}!

`,button:"Открыть сайт",url:"https://safimine.ru"}),children:[e.jsx(o,{n:"plus",s:13}),"Новый"]})]})]}),a&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Название шаблона"}),e.jsx("input",{className:"input",value:a.name,onChange:t=>p({name:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Тема письма"}),e.jsx("input",{className:"input",value:a.subject,onChange:t=>p({subject:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Заголовок в письме"}),e.jsx("input",{className:"input",value:a.title,onChange:t=>p({title:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Текст"}),e.jsx("textarea",{className:"input !min-h-[180px]",value:a.body,onChange:t=>p({body:t.target.value})}),e.jsxs("span",{className:"muted text-xs mt-1 block",children:["{nick}"," — ник игрока · **жирный** · [текст](https://ссылка) · пустая строка — новый абзац"]})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Кнопка"}),e.jsx("input",{className:"input",value:a.button,onChange:t=>p({button:t.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Ссылка кнопки"}),e.jsx("input",{className:"input",value:a.url,onChange:t=>p({url:t.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{className:"label",children:"Кому"}),e.jsx("select",{className:"input",value:h,onChange:t=>S(t.target.value),children:b.map(([t,n])=>e.jsx("option",{value:t,children:n},t))}),e.jsx("span",{className:"muted text-xs mt-1 block",children:"Игроки, отключившие рассылку в кабинете, письмо не получат."})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[e.jsxs("button",{className:"btn",onClick:A,children:[e.jsx(o,{n:"check",s:15}),"Сохранить шаблон"]}),e.jsxs("button",{className:"btn",disabled:!!f,onClick:()=>w(!0),children:[f==="test"?e.jsx("span",{className:"spin"}):e.jsx(o,{n:"mail",s:15}),"Тест себе"]}),e.jsxs("button",{className:"btn btn-primary ml-auto",disabled:!!f,onClick:()=>w(!1),children:[f==="all"?e.jsx("span",{className:"spin"}):e.jsx(o,{n:"send",s:15}),"Отправить рассылку"]})]})]})]}),e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("div",{className:"px-4 py-2.5 text-xs muted flex items-center gap-2 border-b",style:{borderColor:"var(--line)"},children:[e.jsx(o,{n:"eye",s:14}),"Так письмо увидит игрок"]}),e.jsx("iframe",{title:"Предпросмотр",srcDoc:M,className:"w-full h-[620px] bg-[#020b0d]"})]})]}),s==="auth"&&e.jsxs("div",{className:"grid xl:grid-cols-[340px_1fr] gap-4 items-start",children:[e.jsxs("div",{className:"card p-5 grid gap-3",children:[e.jsxs("p",{className:"text-sm leading-relaxed",children:["Эти письма отправляет сам вход на сайт. Чтобы они стали такими, один раз вставьте шаблоны в Supabase: ",e.jsx("b",{children:"Authentication → Emails → Templates"})," — для каждого письма тему и HTML с этой страницы."]}),e.jsxs("p",{className:"muted text-xs leading-relaxed",children:["Чтобы письма приходили от support@safimine.ru, а не от Supabase: ",e.jsx("b",{children:"Authentication → Emails → SMTP Settings"})," → Host ",e.jsx("code",{children:"smtp.mail.ru"}),", Port ",e.jsx("code",{children:"465"}),", User ",e.jsx("code",{children:"support@safimine.ru"}),", пароль — пароль приложения из VK WorkSpace."]}),e.jsx("div",{className:"grid gap-1.5",children:E.map(([t,n])=>e.jsx("button",{className:"pill justify-start "+(v===t?"on":""),onClick:()=>z(t),children:n},t))})]}),(()=>{const[t,n,i]=E.find(([l])=>l===v);return e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("div",{className:"px-4 py-3 flex flex-wrap items-center gap-2 border-b",style:{borderColor:"var(--line)"},children:[e.jsx("b",{className:"mr-auto",children:n}),e.jsxs("button",{className:"btn btn-sm",onClick:()=>{var l;(l=navigator.clipboard)==null||l.writeText(N[t]),r("Тема скопирована")},children:[e.jsx(o,{n:"copy",s:13}),"Тема: ",N[t]]}),e.jsxs("button",{className:"btn btn-sm btn-primary",onClick:()=>{var l;(l=navigator.clipboard)==null||l.writeText(i),r("HTML скопирован")},children:[e.jsx(o,{n:"copy",s:13}),"Копировать HTML"]})]}),e.jsx("iframe",{title:n,srcDoc:i.replace(/\{\{ \.ConfirmationURL \}\}/g,"https://safimine.ru").replace(/\{\{ \.Email \}\}/g,"player@mail.ru").replace(/\{\{ \.NewEmail \}\}/g,"new@mail.ru").replace(/\{\{ \.Token \}\}/g,"482915"),className:"w-full h-[640px] bg-[#020b0d]"})]})})()]}),s==="history"&&e.jsxs("div",{className:"card overflow-x-auto",children:[e.jsxs("table",{className:"table min-w-[640px]",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Тема"}),e.jsx("th",{children:"Кому"}),e.jsx("th",{children:"Отправлено"}),e.jsx("th",{children:"Ошибки"}),e.jsx("th",{children:"Когда"})]})}),e.jsxs("tbody",{children:[F.map(t=>{var n;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("b",{children:t.subject}),t.error&&e.jsx("div",{className:"text-xs mt-1",style:{color:"var(--bad)"},children:t.error})]}),e.jsx("td",{className:"muted",children:t.audience==="test"?"тест":((n=b.find(([i])=>i===t.audience))==null?void 0:n[1])??t.audience}),e.jsxs("td",{children:[t.sent," / ",t.recipients]}),e.jsx("td",{children:t.failed||"—"}),e.jsx("td",{className:"muted",children:new Date(t.created_at).toLocaleString("ru-RU")})]},t.id)}),!F.length&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"muted text-center py-8",children:"Рассылок ещё не было"})})]})]}),e.jsx("div",{className:"p-3 flex justify-end",children:e.jsxs("button",{className:"btn btn-sm btn-ghost",onClick:k,children:[e.jsx(o,{n:"history",s:14}),"Обновить"]})})]})]})}const G=r=>window.confirm(r);export{Q as default};
