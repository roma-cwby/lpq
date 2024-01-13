export const getText = (str, lang) => (lang ? text[str].ua : text[str].en);

const text = {
  q1: {
    en: 'Your contact details or Instagram name',
    ua: 'Напишіть ваші контакти або нікнейм інстаграму',
  },
  q2: {
    en: 'Preferred date and time of shooting',
    ua: 'Бажана дата та час зйомки',
  },
  q3: {
    en: 'What type of photo shoot are you interested in?',
    ua: 'Яка зйомка вас цікавить?',
  },
  q3a: {
    en: 'Individual portrait',
    ua: 'Індивідуальна портретна',
  },
  q3b: {
    en: 'Love story',
    ua: 'Парна',
  },
  q3c: {
    en: 'Family',
    ua: 'Сімейна',
  },
  q3d: {
    en: 'Wedding',
    ua: 'Весільна',
  },
  q3e: {
    en: 'Something else (write another answer here)',
    ua: 'Інше (напишіть тут вашу відповідь)',
  },
  q4: {
    en: 'For how many hours are you looking to book the photo shoot?',
    ua: 'На скільки годин ви б хотіли замовити зйомку?',
  },
  q4a: {
    en: '1',
    ua: '1',
  },
  q4b: {
    en: '2',
    ua: '2',
  },
  q4c: {
    en: '3-4',
    ua: '3-4',
  },
  q4d: {
    en: 'More',
    ua: 'Більше',
  },
  q5: {
    en: 'How many individuals are expected to attend the photo shoot?',
    ua: 'Скільки людей будуть присутніми на зйомці?',
  },
  q6: {
    en: 'How many different outfits would you like to wear for the photos?',
    ua: 'Скільки образів ви б хотіли змінити на зйомці?',
  },
  q7: {
    en: 'Do you have a concept in mind for the shoot? If yes, please provide a detailed description here',
    ua: 'Чи є у вас ідея зйомки, якщо так опишіть її тут, якомога більше деталей',
  },
  q8: {
    en: 'Do you need additional services (makeup, stylist, studio)',
    ua: 'Чи потрібні вам додаткові послуги (макіяж, студія, допомога стиліста)',
  },
  q9: {
    en: 'How many photographs are you aiming to obtain from this session?',
    ua: 'Яку кількість фото ви хотіли б отримати з цієї зйомки?',
  },
  q10: {
    en: 'Would you prefer to select the photo for editing yourself, or would you like the photographer to make the choice?',
    ua: 'Чи хотіли б ви самі обрати фото для обробки чи надаєте перевагу вибору фотографом?',
  },
  q11: {
    en: 'How do you typically feel during a photo shoot? Do you require any psychological support?',
    ua: 'Як ви зазвичай почуваєтесь на фотозйомці? Чи потрібна вам психологічна підтримка?',
  },
  q12: {
    en: 'Do you need a posing guide?',
    ua: 'Чи потрібен вам гайд з позування?',
  },
  q13: {
    en: 'Are there any specific locations where you would like to have the photos taken?',
    ua: 'Чи є якась спеціальна локація, де б ви хотіли зробити цю фотосесію? ',
  },
  q14: {
    en: 'Would you like a list of the best locations in London for photo shoots?',
    ua: 'Чи потрібен вас список топ локацій в Лондоні для фотосесій?',
  },
  thank: {
    en: `Thanks for your responses! I'll review the information and get back to you promptly!`,
    ua: 'Дякуємо за ваші відповіді! Я перегляну інформацію та негайно зв’яжуся з вами!',
  },
  sub: {
    en: 'Submit',
    ua: 'Надіслати',
  },
  error: {
    en: 'Error! Pleace try again',
    ua: 'Помилка. Будь ласка спробуйте ще раз',
  },
};
