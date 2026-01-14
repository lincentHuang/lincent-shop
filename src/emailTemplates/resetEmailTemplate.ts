export const resetEmailTemplate = (to: string, url: string) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50;">重設您的密碼</h2>
      <p>您好，</p>
      <p>我們收到您重設密碼的請求。請點擊下方的按鈕來重設您的密碼：</p>
      <a href="${url}" 
         style="display: inline-block; padding: 10px 20px; margin: 20px 0; 
                font-size: 16px; color: #fff; background-color: #4CAF50; 
                text-decoration: none; border-radius: 5px;">
        重設密碼
      </a>
      <p>如果您沒有請求重設密碼，請忽略此郵件。</p>
      <p>       謝謝！<br/>您的團隊</p>                             
    </div>
  `;
};
