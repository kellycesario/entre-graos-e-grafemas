import styles from './styles.module.scss'

export const Sprites = () => {
  return (
    <svg className={styles.svg}>
      <defs>
        <symbol id="logo-mobile">
          <path
            d="M1.22852 33V18.4545H5.17738V24.1364H10.4047V18.4545H14.3535V33H10.4047V27.3182H5.17738V33H1.22852ZM21.5126 33.1989C20.3478 33.1989 19.344 32.9763 18.5012 32.5312C17.6632 32.0814 17.0169 31.4375 16.5623 30.5994C16.1125 29.7566 15.8876 28.7481 15.8876 27.5739C15.8876 26.447 16.1149 25.4621 16.5694 24.6193C17.024 23.7765 17.6655 23.1207 18.4941 22.652C19.3227 22.1832 20.3005 21.9489 21.4274 21.9489C22.2512 21.9489 22.997 22.0767 23.6646 22.3324C24.3322 22.5881 24.9028 22.9598 25.3762 23.4474C25.8497 23.9304 26.2143 24.5175 26.47 25.2088C26.7257 25.9001 26.8535 26.679 26.8535 27.5455V28.4545H17.1092V26.2955H23.2456C23.2408 25.983 23.1603 25.7083 23.0041 25.4716C22.8526 25.2301 22.6466 25.0431 22.3862 24.9105C22.1305 24.7732 21.8393 24.7045 21.5126 24.7045C21.1954 24.7045 20.9042 24.7732 20.639 24.9105C20.3739 25.0431 20.1608 25.2277 19.9998 25.4645C19.8436 25.7012 19.7607 25.9782 19.7512 26.2955V28.625C19.7512 28.9754 19.8246 29.2879 19.9714 29.5625C20.1182 29.8371 20.3289 30.0526 20.6035 30.2088C20.8781 30.3651 21.2096 30.4432 21.5978 30.4432C21.8677 30.4432 22.1139 30.4053 22.3365 30.3295C22.5637 30.2538 22.7579 30.1449 22.9189 30.0028C23.0798 29.8561 23.1982 29.6809 23.274 29.4773H26.8535C26.7304 30.2348 26.4392 30.893 25.9799 31.4517C25.5207 32.0057 24.9122 32.4366 24.1547 32.7443C23.4018 33.0473 22.5211 33.1989 21.5126 33.1989ZM28.4533 33V22.0909H32.2601V24.1648H32.3738C32.5726 23.3977 32.8875 22.8366 33.3184 22.4815C33.754 22.1264 34.263 21.9489 34.8453 21.9489C35.0158 21.9489 35.1839 21.9631 35.3496 21.9915C35.5201 22.0152 35.6834 22.0507 35.8397 22.098V25.4432C35.6455 25.3769 35.4064 25.3272 35.1223 25.294C34.8382 25.2609 34.5944 25.2443 34.3908 25.2443C34.0073 25.2443 33.6616 25.3319 33.3539 25.5071C33.0508 25.6776 32.8117 25.919 32.6365 26.2315C32.4614 26.5393 32.3738 26.9015 32.3738 27.3182V33H28.4533ZM37.1252 33V22.0909H40.8468V24.1648H40.9604C41.1877 23.483 41.5759 22.9432 42.1252 22.5455C42.6744 22.1477 43.3278 21.9489 44.0854 21.9489C44.8525 21.9489 45.513 22.1525 46.0669 22.5597C46.6209 22.9621 46.9547 23.4972 47.0684 24.1648H47.182C47.3667 23.4972 47.7596 22.9621 48.361 22.5597C48.9623 22.1525 49.6678 21.9489 50.4775 21.9489C51.5239 21.9489 52.3714 22.285 53.0201 22.9574C53.6735 23.6297 54.0002 24.5246 54.0002 25.642V33H50.0797V26.6364C50.0797 26.1581 49.959 25.7841 49.7175 25.5142C49.476 25.2396 49.1517 25.1023 48.7445 25.1023C48.342 25.1023 48.0224 25.2396 47.7857 25.5142C47.5537 25.7841 47.4377 26.1581 47.4377 26.6364V33H43.6877V26.6364C43.6877 26.1581 43.5669 25.7841 43.3255 25.5142C43.084 25.2396 42.7596 25.1023 42.3525 25.1023C42.0826 25.1023 41.8506 25.1638 41.6564 25.2869C41.4623 25.41 41.3108 25.5876 41.2019 25.8196C41.0977 26.0469 41.0456 26.3191 41.0456 26.6364V33H37.1252ZM61.1895 33.1989C60.0057 33.1989 58.9925 32.9645 58.1497 32.4957C57.3069 32.0223 56.6606 31.3641 56.2108 30.5213C55.7609 29.6738 55.536 28.6913 55.536 27.5739C55.536 26.4564 55.7609 25.4763 56.2108 24.6335C56.6606 23.786 57.3069 23.1278 58.1497 22.6591C58.9925 22.1856 60.0057 21.9489 61.1895 21.9489C62.3732 21.9489 63.3864 22.1856 64.2292 22.6591C65.072 23.1278 65.7183 23.786 66.1681 24.6335C66.618 25.4763 66.8429 26.4564 66.8429 27.5739C66.8429 28.6913 66.618 29.6738 66.1681 30.5213C65.7183 31.3641 65.072 32.0223 64.2292 32.4957C63.3864 32.9645 62.3732 33.1989 61.1895 33.1989ZM61.2179 30.3011C61.5493 30.3011 61.8358 30.1899 62.0772 29.9673C62.3187 29.7448 62.5057 29.4276 62.6383 29.0156C62.7709 28.6037 62.8372 28.1136 62.8372 27.5455C62.8372 26.9725 62.7709 26.4825 62.6383 26.0753C62.5057 25.6634 62.3187 25.3461 62.0772 25.1236C61.8358 24.901 61.5493 24.7898 61.2179 24.7898C60.8675 24.7898 60.5668 24.901 60.3159 25.1236C60.0649 25.3461 59.8732 25.6634 59.7406 26.0753C59.608 26.4825 59.5417 26.9725 59.5417 27.5455C59.5417 28.1136 59.608 28.6037 59.7406 29.0156C59.8732 29.4276 60.0649 29.7448 60.3159 29.9673C60.5668 30.1899 60.8675 30.3011 61.2179 30.3011ZM72.3542 26.8636V33H68.4338V22.0909H72.1554V24.1648H72.269C72.5057 23.4735 72.9224 22.9313 73.519 22.5384C74.1203 22.1454 74.8211 21.9489 75.6213 21.9489C76.3931 21.9489 77.063 22.1264 77.6312 22.4815C78.2041 22.8319 78.6468 23.3149 78.9593 23.9304C79.2766 24.5459 79.4328 25.2491 79.4281 26.0398V33H75.5076V26.8636C75.5124 26.3239 75.3751 25.9001 75.0957 25.5923C74.8211 25.2846 74.4376 25.1307 73.9451 25.1307C73.6232 25.1307 73.3414 25.2017 73.1 25.3438C72.8632 25.4811 72.6809 25.6799 72.5531 25.9403C72.4252 26.196 72.359 26.5038 72.3542 26.8636ZM87.8691 22.0909V24.9318H80.6816V22.0909H87.8691ZM82.0737 19.4773H85.9941V29.4915C85.9941 29.643 86.0202 29.7708 86.0723 29.875C86.1243 29.9744 86.2048 30.0502 86.3137 30.1023C86.4226 30.1496 86.5623 30.1733 86.7328 30.1733C86.8511 30.1733 86.9885 30.1591 87.1447 30.1307C87.3057 30.1023 87.4241 30.0786 87.4998 30.0597L88.068 32.8153C87.8928 32.8674 87.6419 32.9313 87.3152 33.0071C86.9932 33.0829 86.6097 33.1326 86.1646 33.1562C85.265 33.2036 84.5098 33.1113 83.899 32.8793C83.2882 32.6425 82.8289 32.2708 82.5211 31.7642C82.2134 31.2576 82.0642 30.6231 82.0737 29.8608V19.4773Z"
            fill="#8C4949"
          />
          <path
            d="M95.584 33.2273C95.0347 33.2273 94.5636 33.0355 94.1706 32.652C93.7824 32.2637 93.5906 31.7926 93.5953 31.2386C93.5906 30.6989 93.7824 30.2372 94.1706 29.8537C94.5636 29.4702 95.0347 29.2784 95.584 29.2784C96.1048 29.2784 96.5641 29.4702 96.9618 29.8537C97.3643 30.2372 97.5679 30.6989 97.5726 31.2386C97.5679 31.608 97.4708 31.9441 97.2814 32.2472C97.0968 32.5455 96.8553 32.7846 96.557 32.9645C96.2587 33.1397 95.9344 33.2273 95.584 33.2273Z"
            fill="#F26666"
          />
          <path
            d="M0.219094 7L2.66709 1.4H4.52309L6.97109 7H5.01909L3.21109 2.296H3.94709L2.13909 7H0.219094ZM1.67509 6.024L2.15509 4.664H4.73109L5.21109 6.024H1.67509ZM9.61484 7V2.624H11.3348V3.944L11.0548 3.568C11.1882 3.22667 11.4015 2.97067 11.6948 2.8C11.9882 2.62933 12.3402 2.544 12.7508 2.544V4.144C12.6708 4.13333 12.5988 4.12533 12.5348 4.12C12.4762 4.11467 12.4148 4.112 12.3508 4.112C12.0788 4.112 11.8548 4.184 11.6788 4.328C11.5082 4.46667 11.4228 4.70933 11.4228 5.056V7H9.61484ZM18.3097 7V6.224L18.1817 6.016V4.544C18.1817 4.33067 18.1151 4.168 17.9817 4.056C17.8537 3.944 17.6431 3.888 17.3497 3.888C17.1524 3.888 16.9524 3.92 16.7497 3.984C16.5471 4.04267 16.3737 4.12533 16.2297 4.232L15.6537 3.04C15.9097 2.88 16.2164 2.75733 16.5737 2.672C16.9311 2.58667 17.2804 2.544 17.6217 2.544C18.3737 2.544 18.9551 2.712 19.3657 3.048C19.7817 3.384 19.9897 3.91733 19.9897 4.648V7H18.3097ZM17.0697 7.08C16.7124 7.08 16.4137 7.01867 16.1737 6.896C15.9337 6.77333 15.7524 6.61067 15.6297 6.408C15.5071 6.2 15.4457 5.97067 15.4457 5.72C15.4457 5.43733 15.5177 5.19733 15.6617 5C15.8057 4.80267 16.0244 4.65333 16.3177 4.552C16.6164 4.45067 16.9924 4.4 17.4457 4.4H18.3577V5.272H17.7337C17.5417 5.272 17.4004 5.304 17.3097 5.368C17.2244 5.42667 17.1817 5.51733 17.1817 5.64C17.1817 5.74133 17.2191 5.82667 17.2937 5.896C17.3737 5.96 17.4804 5.992 17.6137 5.992C17.7364 5.992 17.8484 5.96 17.9497 5.896C18.0564 5.82667 18.1337 5.72 18.1817 5.576L18.4137 6.112C18.3444 6.43733 18.1977 6.68 17.9737 6.84C17.7497 7 17.4484 7.08 17.0697 7.08ZM26.0895 7.08C25.6895 7.08 25.3669 7 25.1215 6.84C24.8762 6.68 24.6975 6.432 24.5855 6.096C24.4789 5.76 24.4255 5.33067 24.4255 4.808C24.4255 4.29067 24.4842 3.86667 24.6015 3.536C24.7189 3.2 24.9002 2.952 25.1455 2.792C25.3962 2.62667 25.7109 2.544 26.0895 2.544C26.4735 2.544 26.8255 2.63467 27.1455 2.816C27.4655 2.99733 27.7215 3.25867 27.9135 3.6C28.1055 3.936 28.2015 4.33867 28.2015 4.808C28.2015 5.27733 28.1055 5.68267 27.9135 6.024C27.7215 6.36 27.4655 6.62133 27.1455 6.808C26.8255 6.98933 26.4735 7.08 26.0895 7.08ZM23.1695 7V1.064H24.9775V3.208L24.8975 4.808L24.8895 6.408V7H23.1695ZM25.6575 5.672C25.7909 5.672 25.9109 5.64 26.0175 5.576C26.1242 5.512 26.2095 5.416 26.2735 5.288C26.3375 5.15467 26.3695 4.99467 26.3695 4.808C26.3695 4.616 26.3375 4.45867 26.2735 4.336C26.2095 4.208 26.1242 4.112 26.0175 4.048C25.9109 3.984 25.7909 3.952 25.6575 3.952C25.5242 3.952 25.4042 3.984 25.2975 4.048C25.1909 4.112 25.1055 4.208 25.0415 4.336C24.9775 4.45867 24.9455 4.616 24.9455 4.808C24.9455 4.99467 24.9775 5.15467 25.0415 5.288C25.1055 5.416 25.1909 5.512 25.2975 5.576C25.4042 5.64 25.5242 5.672 25.6575 5.672ZM31.1695 7V2.624H32.9775V7H31.1695ZM32.0735 2.272C31.7429 2.272 31.4789 2.184 31.2815 2.008C31.0842 1.832 30.9855 1.61333 30.9855 1.352C30.9855 1.09067 31.0842 0.872 31.2815 0.696C31.4789 0.52 31.7429 0.432 32.0735 0.432C32.4042 0.432 32.6682 0.514666 32.8655 0.68C33.0629 0.845333 33.1615 1.05867 33.1615 1.32C33.1615 1.59733 33.0629 1.82667 32.8655 2.008C32.6682 2.184 32.4042 2.272 32.0735 2.272ZM38.5933 7.08C38.06 7.08 37.5933 6.98133 37.1933 6.784C36.7987 6.58667 36.492 6.31733 36.2733 5.976C36.0547 5.62933 35.9453 5.24 35.9453 4.808C35.9453 4.36533 36.052 3.97333 36.2653 3.632C36.484 3.29067 36.78 3.024 37.1533 2.832C37.532 2.64 37.956 2.544 38.4253 2.544C38.8573 2.544 39.2547 2.62933 39.6173 2.8C39.9853 2.97067 40.2787 3.224 40.4973 3.56C40.7213 3.896 40.8333 4.312 40.8333 4.808C40.8333 4.872 40.8307 4.944 40.8253 5.024C40.82 5.09867 40.8147 5.168 40.8093 5.232H37.4413V4.36H39.8493L39.1693 4.592C39.1693 4.42133 39.1373 4.27733 39.0733 4.16C39.0147 4.03733 38.932 3.944 38.8253 3.88C38.7187 3.81067 38.5907 3.776 38.4413 3.776C38.292 3.776 38.1613 3.81067 38.0493 3.88C37.9427 3.944 37.86 4.03733 37.8013 4.16C37.7427 4.27733 37.7133 4.42133 37.7133 4.592V4.864C37.7133 5.05067 37.7507 5.21067 37.8253 5.344C37.9 5.47733 38.0067 5.57867 38.1453 5.648C38.284 5.712 38.452 5.744 38.6493 5.744C38.852 5.744 39.0173 5.71733 39.1453 5.664C39.2787 5.61067 39.4173 5.53067 39.5613 5.424L40.5053 6.376C40.292 6.60533 40.028 6.78133 39.7133 6.904C39.404 7.02133 39.0307 7.08 38.5933 7.08ZM46.2568 7V1.4H49.2488C50.0221 1.4 50.5928 1.53867 50.9608 1.816C51.3288 2.088 51.5128 2.43733 51.5128 2.864C51.5128 3.14667 51.4328 3.4 51.2728 3.624C51.1181 3.84267 50.8914 4.016 50.5928 4.144C50.2941 4.272 49.9261 4.336 49.4888 4.336L49.6488 3.904C50.0861 3.904 50.4621 3.96533 50.7768 4.088C51.0968 4.21067 51.3421 4.38933 51.5128 4.624C51.6888 4.85333 51.7768 5.13067 51.7768 5.456C51.7768 5.94133 51.5741 6.32 51.1688 6.592C50.7688 6.864 50.1821 7 49.4088 7H46.2568ZM48.1128 5.68H49.2488C49.4568 5.68 49.6114 5.64267 49.7128 5.568C49.8194 5.49333 49.8728 5.384 49.8728 5.24C49.8728 5.096 49.8194 4.98667 49.7128 4.912C49.6114 4.83733 49.4568 4.8 49.2488 4.8H47.9848V3.552H48.9928C49.2061 3.552 49.3608 3.51733 49.4568 3.448C49.5581 3.37333 49.6088 3.26933 49.6088 3.136C49.6088 2.99733 49.5581 2.89333 49.4568 2.824C49.3608 2.75467 49.2061 2.72 48.9928 2.72H48.1128V5.68ZM57.2027 7.08C56.6694 7.08 56.2027 6.98133 55.8027 6.784C55.4081 6.58667 55.1014 6.31733 54.8827 5.976C54.6641 5.62933 54.5547 5.24 54.5547 4.808C54.5547 4.36533 54.6614 3.97333 54.8747 3.632C55.0934 3.29067 55.3894 3.024 55.7627 2.832C56.1414 2.64 56.5654 2.544 57.0347 2.544C57.4667 2.544 57.8641 2.62933 58.2267 2.8C58.5947 2.97067 58.8881 3.224 59.1067 3.56C59.3307 3.896 59.4427 4.312 59.4427 4.808C59.4427 4.872 59.4401 4.944 59.4347 5.024C59.4294 5.09867 59.4241 5.168 59.4187 5.232H56.0507V4.36H58.4587L57.7787 4.592C57.7787 4.42133 57.7467 4.27733 57.6827 4.16C57.6241 4.03733 57.5414 3.944 57.4347 3.88C57.3281 3.81067 57.2001 3.776 57.0507 3.776C56.9014 3.776 56.7707 3.81067 56.6587 3.88C56.5521 3.944 56.4694 4.03733 56.4107 4.16C56.3521 4.27733 56.3227 4.42133 56.3227 4.592V4.864C56.3227 5.05067 56.3601 5.21067 56.4347 5.344C56.5094 5.47733 56.6161 5.57867 56.7547 5.648C56.8934 5.712 57.0614 5.744 57.2587 5.744C57.4614 5.744 57.6267 5.71733 57.7547 5.664C57.8881 5.61067 58.0267 5.53067 58.1707 5.424L59.1147 6.376C58.9014 6.60533 58.6374 6.78133 58.3227 6.904C58.0134 7.02133 57.6401 7.08 57.2027 7.08ZM62.2517 7V5.96L64.5797 3.368L64.8757 3.944H62.3157V2.624H66.3397V3.664L64.0117 6.256L63.7157 5.68H66.4277V7H62.2517ZM69.3727 7V2.624H71.0927V3.944L70.8127 3.568C70.946 3.22667 71.1593 2.97067 71.4527 2.8C71.746 2.62933 72.098 2.544 72.5087 2.544V4.144C72.4287 4.13333 72.3567 4.12533 72.2927 4.12C72.234 4.11467 72.1727 4.112 72.1087 4.112C71.8367 4.112 71.6127 4.184 71.4367 4.328C71.266 4.46667 71.1807 4.70933 71.1807 5.056V7H69.3727ZM75.4195 7V2.624H77.2275V7H75.4195ZM76.3235 2.272C75.9929 2.272 75.7289 2.184 75.5315 2.008C75.3342 1.832 75.2355 1.61333 75.2355 1.352C75.2355 1.09067 75.3342 0.872 75.5315 0.696C75.7289 0.52 75.9929 0.432 76.3235 0.432C76.6542 0.432 76.9182 0.514666 77.1155 0.68C77.3129 0.845333 77.4115 1.05867 77.4115 1.32C77.4115 1.59733 77.3129 1.82667 77.1155 2.008C76.9182 2.184 76.6542 2.272 76.3235 2.272Z"
            fill="#F26666"
          />
        </symbol>
        <symbol id="logo-desktop">
          <path
            d="M1.95703 48V18.9091H9.85476V30.2727H20.3093V18.9091H28.207V48H20.3093V36.6364H9.85476V48H1.95703ZM42.5252 48.3977C40.1957 48.3977 38.1881 47.9527 36.5025 47.0625C34.8263 46.1629 33.5337 44.875 32.6246 43.1989C31.725 41.5133 31.2752 39.4962 31.2752 37.1477C31.2752 34.8939 31.7298 32.9242 32.6388 31.2386C33.5479 29.553 34.8311 28.2415 36.4883 27.304C38.1455 26.3665 40.101 25.8977 42.3548 25.8977C44.0025 25.8977 45.494 26.1534 46.8292 26.6648C48.1644 27.1761 49.3055 27.9195 50.2525 28.8949C51.1995 29.8608 51.9286 31.035 52.44 32.4176C52.9513 33.8002 53.207 35.358 53.207 37.0909V38.9091H33.7184V34.5909H45.9911C45.9817 33.9659 45.8207 33.4167 45.5082 32.9432C45.2051 32.4602 44.7932 32.0862 44.2724 31.821C43.761 31.5464 43.1786 31.4091 42.5252 31.4091C41.8907 31.4091 41.3084 31.5464 40.7781 31.821C40.2478 32.0862 39.8216 32.4555 39.4996 32.929C39.1871 33.4025 39.0214 33.9564 39.0025 34.5909V39.25C39.0025 39.9508 39.1493 40.5758 39.4428 41.125C39.7364 41.6742 40.1578 42.1051 40.707 42.4176C41.2563 42.7301 41.9192 42.8864 42.6957 42.8864C43.2354 42.8864 43.7279 42.8106 44.1729 42.6591C44.6275 42.5076 45.0157 42.2898 45.3377 42.0057C45.6597 41.7121 45.8964 41.3617 46.0479 40.9545H53.207C52.9608 42.4697 52.3784 43.786 51.4599 44.9034C50.5413 46.0114 49.3245 46.8731 47.8093 47.4886C46.3036 48.0947 44.5423 48.3977 42.5252 48.3977ZM56.4066 48V26.1818H64.0202V30.3295H64.2475C64.6452 28.7955 65.275 27.6733 66.1367 26.9631C67.0079 26.2528 68.0259 25.8977 69.1907 25.8977C69.5316 25.8977 69.8678 25.9261 70.1992 25.983C70.5401 26.0303 70.8668 26.1013 71.1793 26.196V32.8864C70.7911 32.7538 70.3129 32.6544 69.7447 32.5881C69.1765 32.5218 68.6888 32.4886 68.2816 32.4886C67.5146 32.4886 66.8233 32.6638 66.2077 33.0142C65.6017 33.3551 65.1235 33.8381 64.7731 34.4631C64.4227 35.0786 64.2475 35.803 64.2475 36.6364V48H56.4066ZM73.7504 48V26.1818H81.1935V30.3295H81.4208C81.8754 28.9659 82.6519 27.8864 83.7504 27.0909C84.8488 26.2955 86.1557 25.8977 87.6708 25.8977C89.2049 25.8977 90.5259 26.3049 91.6339 27.1193C92.7418 27.9242 93.4094 28.9943 93.6367 30.3295H93.864C94.2333 28.9943 95.0193 27.9242 96.2219 27.1193C97.4246 26.3049 98.8356 25.8977 100.455 25.8977C102.548 25.8977 104.243 26.5701 105.54 27.9148C106.847 29.2595 107.5 31.0492 107.5 33.2841V48H99.6594V35.2727C99.6594 34.3163 99.418 33.5682 98.935 33.0284C98.4521 32.4792 97.8034 32.2045 96.989 32.2045C96.1841 32.2045 95.5449 32.4792 95.0714 33.0284C94.6074 33.5682 94.3754 34.3163 94.3754 35.2727V48H86.8754V35.2727C86.8754 34.3163 86.6339 33.5682 86.1509 33.0284C85.668 32.4792 85.0193 32.2045 84.2049 32.2045C83.6651 32.2045 83.2011 32.3277 82.8129 32.5739C82.4246 32.8201 82.1216 33.1752 81.9038 33.6392C81.6954 34.0937 81.5913 34.6383 81.5913 35.2727V48H73.7504ZM121.879 48.3977C119.511 48.3977 117.485 47.929 115.799 46.9915C114.114 46.0445 112.821 44.7282 111.922 43.0426C111.022 41.3475 110.572 39.3826 110.572 37.1477C110.572 34.9129 111.022 32.9527 111.922 31.267C112.821 29.572 114.114 28.2557 115.799 27.3182C117.485 26.3712 119.511 25.8977 121.879 25.8977C124.246 25.8977 126.273 26.3712 127.958 27.3182C129.644 28.2557 130.937 29.572 131.836 31.267C132.736 32.9527 133.186 34.9129 133.186 37.1477C133.186 39.3826 132.736 41.3475 131.836 43.0426C130.937 44.7282 129.644 46.0445 127.958 46.9915C126.273 47.929 124.246 48.3977 121.879 48.3977ZM121.936 42.6023C122.599 42.6023 123.172 42.3797 123.654 41.9347C124.137 41.4896 124.511 40.8551 124.777 40.0312C125.042 39.2074 125.174 38.2273 125.174 37.0909C125.174 35.9451 125.042 34.965 124.777 34.1506C124.511 33.3267 124.137 32.6922 123.654 32.2472C123.172 31.8021 122.599 31.5795 121.936 31.5795C121.235 31.5795 120.634 31.8021 120.132 32.2472C119.63 32.6922 119.246 33.3267 118.981 34.1506C118.716 34.965 118.583 35.9451 118.583 37.0909C118.583 38.2273 118.716 39.2074 118.981 40.0312C119.246 40.8551 119.63 41.4896 120.132 41.9347C120.634 42.3797 121.235 42.6023 121.936 42.6023ZM144.208 35.7273V48H136.368V26.1818H143.811V30.3295H144.038C144.511 28.947 145.345 27.8627 146.538 27.0767C147.741 26.2907 149.142 25.8977 150.743 25.8977C152.286 25.8977 153.626 26.2528 154.762 26.9631C155.908 27.6638 156.794 28.6297 157.419 29.8608C158.053 31.0919 158.366 32.4981 158.356 34.0795V48H150.515V35.7273C150.525 34.6477 150.25 33.8002 149.691 33.1847C149.142 32.5691 148.375 32.2614 147.39 32.2614C146.746 32.2614 146.183 32.4034 145.7 32.6875C145.226 32.9621 144.862 33.3598 144.606 33.8807C144.35 34.392 144.218 35.0076 144.208 35.7273ZM175.238 26.1818V31.8636H160.863V26.1818H175.238ZM163.647 20.9545H171.488V40.983C171.488 41.286 171.54 41.5417 171.645 41.75C171.749 41.9489 171.91 42.1004 172.127 42.2045C172.345 42.2992 172.625 42.3466 172.966 42.3466C173.202 42.3466 173.477 42.3182 173.789 42.2614C174.111 42.2045 174.348 42.1572 174.5 42.1193L175.636 47.6307C175.286 47.7348 174.784 47.8627 174.13 48.0142C173.486 48.1657 172.719 48.2652 171.829 48.3125C170.03 48.4072 168.52 48.2225 167.298 47.7585C166.076 47.285 165.158 46.5417 164.542 45.5284C163.927 44.5152 163.628 43.2462 163.647 41.7216V20.9545Z"
            fill="#8C4949"
          />
          <path
            d="M190.668 48.4545C189.569 48.4545 188.627 48.071 187.841 47.304C187.065 46.5275 186.681 45.5852 186.691 44.4773C186.681 43.3977 187.065 42.4744 187.841 41.7074C188.627 40.9403 189.569 40.5568 190.668 40.5568C191.71 40.5568 192.628 40.9403 193.424 41.7074C194.229 42.4744 194.636 43.3977 194.645 44.4773C194.636 45.2159 194.442 45.8883 194.063 46.4943C193.694 47.0909 193.211 47.5691 192.614 47.929C192.017 48.2794 191.369 48.4545 190.668 48.4545Z"
            fill="#F26666"
          />
          <path
            d="M0.0238672 9L3.08387 2H5.40387L8.46387 9H6.02387L3.76387 3.12H4.68387L2.42387 9H0.0238672ZM1.84387 7.78L2.44387 6.08H5.66387L6.26387 7.78H1.84387ZM11.7686 9V3.53H13.9186V5.18L13.5686 4.71C13.7352 4.28333 14.0019 3.96333 14.3686 3.75C14.7352 3.53667 15.1752 3.43 15.6886 3.43V5.43C15.5886 5.41667 15.4986 5.40667 15.4186 5.4C15.3452 5.39333 15.2686 5.39 15.1886 5.39C14.8486 5.39 14.5686 5.48 14.3486 5.66C14.1352 5.83333 14.0286 6.13667 14.0286 6.57V9H11.7686ZM22.6371 9V8.03L22.4771 7.77V5.93C22.4771 5.66333 22.3938 5.46 22.2271 5.32C22.0671 5.18 21.8038 5.11 21.4371 5.11C21.1905 5.11 20.9405 5.15 20.6871 5.23C20.4338 5.30333 20.2171 5.40667 20.0371 5.54L19.3171 4.05C19.6371 3.85 20.0205 3.69667 20.4671 3.59C20.9138 3.48333 21.3505 3.43 21.7771 3.43C22.7171 3.43 23.4438 3.64 23.9571 4.06C24.4771 4.48 24.7371 5.14667 24.7371 6.06V9H22.6371ZM21.0871 9.1C20.6405 9.1 20.2671 9.02333 19.9671 8.87C19.6671 8.71667 19.4405 8.51333 19.2871 8.26C19.1338 8 19.0571 7.71333 19.0571 7.4C19.0571 7.04667 19.1471 6.74667 19.3271 6.5C19.5071 6.25333 19.7805 6.06667 20.1471 5.94C20.5205 5.81333 20.9905 5.75 21.5571 5.75H22.6971V6.84H21.9171C21.6771 6.84 21.5005 6.88 21.3871 6.96C21.2805 7.03333 21.2271 7.14667 21.2271 7.3C21.2271 7.42667 21.2738 7.53333 21.3671 7.62C21.4671 7.7 21.6005 7.74 21.7671 7.74C21.9205 7.74 22.0605 7.7 22.1871 7.62C22.3205 7.53333 22.4171 7.4 22.4771 7.22L22.7671 7.89C22.6805 8.29667 22.4971 8.6 22.2171 8.8C21.9371 9 21.5605 9.1 21.0871 9.1ZM32.3619 9.1C31.8619 9.1 31.4586 9 31.1519 8.8C30.8452 8.6 30.6219 8.29 30.4819 7.87C30.3486 7.45 30.2819 6.91333 30.2819 6.26C30.2819 5.61333 30.3552 5.08333 30.5019 4.67C30.6486 4.25 30.8752 3.94 31.1819 3.74C31.4952 3.53333 31.8886 3.43 32.3619 3.43C32.8419 3.43 33.2819 3.54333 33.6819 3.77C34.0819 3.99667 34.4019 4.32333 34.6419 4.75C34.8819 5.17 35.0019 5.67333 35.0019 6.26C35.0019 6.84667 34.8819 7.35333 34.6419 7.78C34.4019 8.2 34.0819 8.52667 33.6819 8.76C33.2819 8.98667 32.8419 9.1 32.3619 9.1ZM28.7119 9V1.58H30.9719V4.26L30.8719 6.26L30.8619 8.26V9H28.7119ZM31.8219 7.34C31.9886 7.34 32.1386 7.3 32.2719 7.22C32.4052 7.14 32.5119 7.02 32.5919 6.86C32.6719 6.69333 32.7119 6.49333 32.7119 6.26C32.7119 6.02 32.6719 5.82333 32.5919 5.67C32.5119 5.51 32.4052 5.39 32.2719 5.31C32.1386 5.23 31.9886 5.19 31.8219 5.19C31.6552 5.19 31.5052 5.23 31.3719 5.31C31.2386 5.39 31.1319 5.51 31.0519 5.67C30.9719 5.82333 30.9319 6.02 30.9319 6.26C30.9319 6.49333 30.9719 6.69333 31.0519 6.86C31.1319 7.02 31.2386 7.14 31.3719 7.22C31.5052 7.3 31.6552 7.34 31.8219 7.34ZM38.7119 9V3.53H40.9719V9H38.7119ZM39.8419 3.09C39.4286 3.09 39.0986 2.98 38.8519 2.76C38.6052 2.54 38.4819 2.26667 38.4819 1.94C38.4819 1.61333 38.6052 1.34 38.8519 1.12C39.0986 0.9 39.4286 0.79 39.8419 0.79C40.2552 0.79 40.5852 0.893333 40.8319 1.1C41.0786 1.30667 41.2019 1.57333 41.2019 1.9C41.2019 2.24667 41.0786 2.53333 40.8319 2.76C40.5852 2.98 40.2552 3.09 39.8419 3.09ZM47.9917 9.1C47.325 9.1 46.7417 8.97667 46.2417 8.73C45.7483 8.48333 45.365 8.14667 45.0917 7.72C44.8183 7.28667 44.6817 6.8 44.6817 6.26C44.6817 5.70667 44.815 5.21667 45.0817 4.79C45.355 4.36333 45.725 4.03 46.1917 3.79C46.665 3.55 47.195 3.43 47.7817 3.43C48.3217 3.43 48.8183 3.53667 49.2717 3.75C49.7317 3.96333 50.0983 4.28 50.3717 4.7C50.6517 5.12 50.7917 5.64 50.7917 6.26C50.7917 6.34 50.7883 6.43 50.7817 6.53C50.775 6.62333 50.7683 6.71 50.7617 6.79H46.5517V5.7H49.5617L48.7117 5.99C48.7117 5.77667 48.6717 5.59667 48.5917 5.45C48.5183 5.29667 48.415 5.18 48.2817 5.1C48.1483 5.01333 47.9883 4.97 47.8017 4.97C47.615 4.97 47.4517 5.01333 47.3117 5.1C47.1783 5.18 47.075 5.29667 47.0017 5.45C46.9283 5.59667 46.8917 5.77667 46.8917 5.99V6.33C46.8917 6.56333 46.9383 6.76333 47.0317 6.93C47.125 7.09667 47.2583 7.22333 47.4317 7.31C47.605 7.39 47.815 7.43 48.0617 7.43C48.315 7.43 48.5217 7.39667 48.6817 7.33C48.8483 7.26333 49.0217 7.16333 49.2017 7.03L50.3817 8.22C50.115 8.50667 49.785 8.72667 49.3917 8.88C49.005 9.02667 48.5383 9.1 47.9917 9.1ZM57.571 9V2H61.311C62.2776 2 62.991 2.17333 63.451 2.52C63.911 2.86 64.141 3.29667 64.141 3.83C64.141 4.18333 64.041 4.5 63.841 4.78C63.6476 5.05333 63.3643 5.27 62.991 5.43C62.6176 5.59 62.1576 5.67 61.611 5.67L61.811 5.13C62.3576 5.13 62.8276 5.20667 63.221 5.36C63.621 5.51333 63.9276 5.73667 64.141 6.03C64.361 6.31667 64.471 6.66333 64.471 7.07C64.471 7.67667 64.2176 8.15 63.711 8.49C63.211 8.83 62.4776 9 61.511 9H57.571ZM59.891 7.35H61.311C61.571 7.35 61.7643 7.30333 61.891 7.21C62.0243 7.11667 62.091 6.98 62.091 6.8C62.091 6.62 62.0243 6.48333 61.891 6.39C61.7643 6.29667 61.571 6.25 61.311 6.25H59.731V4.69H60.991C61.2576 4.69 61.451 4.64667 61.571 4.56C61.6976 4.46667 61.761 4.33667 61.761 4.17C61.761 3.99667 61.6976 3.86667 61.571 3.78C61.451 3.69333 61.2576 3.65 60.991 3.65H59.891V7.35ZM71.2534 9.1C70.5867 9.1 70.0034 8.97667 69.5034 8.73C69.0101 8.48333 68.6267 8.14667 68.3534 7.72C68.0801 7.28667 67.9434 6.8 67.9434 6.26C67.9434 5.70667 68.0767 5.21667 68.3434 4.79C68.6167 4.36333 68.9867 4.03 69.4534 3.79C69.9267 3.55 70.4567 3.43 71.0434 3.43C71.5834 3.43 72.0801 3.53667 72.5334 3.75C72.9934 3.96333 73.3601 4.28 73.6334 4.7C73.9134 5.12 74.0534 5.64 74.0534 6.26C74.0534 6.34 74.0501 6.43 74.0434 6.53C74.0367 6.62333 74.0301 6.71 74.0234 6.79H69.8134V5.7H72.8234L71.9734 5.99C71.9734 5.77667 71.9334 5.59667 71.8534 5.45C71.7801 5.29667 71.6767 5.18 71.5434 5.1C71.4101 5.01333 71.2501 4.97 71.0634 4.97C70.8767 4.97 70.7134 5.01333 70.5734 5.1C70.4401 5.18 70.3367 5.29667 70.2634 5.45C70.1901 5.59667 70.1534 5.77667 70.1534 5.99V6.33C70.1534 6.56333 70.2001 6.76333 70.2934 6.93C70.3867 7.09667 70.5201 7.22333 70.6934 7.31C70.8667 7.39 71.0767 7.43 71.3234 7.43C71.5767 7.43 71.7834 7.39667 71.9434 7.33C72.1101 7.26333 72.2834 7.16333 72.4634 7.03L73.6434 8.22C73.3767 8.50667 73.0467 8.72667 72.6534 8.88C72.2667 9.02667 71.8001 9.1 71.2534 9.1ZM77.5646 9V7.7L80.4746 4.46L80.8446 5.18H77.6446V3.53H82.6746V4.83L79.7646 8.07L79.3946 7.35H82.7846V9H77.5646ZM86.4658 9V3.53H88.6158V5.18L88.2658 4.71C88.4325 4.28333 88.6992 3.96333 89.0658 3.75C89.4325 3.53667 89.8725 3.43 90.3858 3.43V5.43C90.2858 5.41667 90.1958 5.40667 90.1158 5.4C90.0425 5.39333 89.9658 5.39 89.8858 5.39C89.5458 5.39 89.2658 5.48 89.0458 5.66C88.8325 5.83333 88.7258 6.13667 88.7258 6.57V9H86.4658ZM94.0244 9V3.53H96.2844V9H94.0244ZM95.1544 3.09C94.7411 3.09 94.4111 2.98 94.1644 2.76C93.9177 2.54 93.7944 2.26667 93.7944 1.94C93.7944 1.61333 93.9177 1.34 94.1644 1.12C94.4111 0.9 94.7411 0.79 95.1544 0.79C95.5677 0.79 95.8977 0.893333 96.1444 1.1C96.3911 1.30667 96.5144 1.57333 96.5144 1.9C96.5144 2.24667 96.3911 2.53333 96.1444 2.76C95.8977 2.98 95.5677 3.09 95.1544 3.09Z"
            fill="#8C4949"
          />
          <line x1="109" y1="5" x2="177" y2="5" stroke="#F26666" />
        </symbol>
      </defs>
    </svg>
  )
}
