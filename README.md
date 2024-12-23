إزاي تعمل محرر نصوص غني باستخدام JavaScript و React و JSON

مقدمة

عمرك فكرت إزاي بتشتغل محررات النصوص الغنية زي Google Docs أو Medium؟ 🤔 التطبيقات دي بتعتمد بشكل كبير على واجهات المستخدم الديناميكية مع تخزين المحتوى بطرق مرنة زي JSON. في المقال ده، هنتكلم إزاي تعمل نظام تحرير نصوص غني باستخدام JavaScript و React مع تخزين المحتوى بصيغة JSON. 🚀

إيه هو JSON؟ وليه بنستخدمه؟

تعريف JSON

JSON (JavaScript Object Notation) هو فورمات خفيف لتبادل البيانات. بيستخدم بشكل كبير لتخزين ونقل البيانات بين الأنظمة.

ليه بنستخدم JSON؟

مرونة: بنقدر نخزن النصوص، الصور، القوائم وغيرها بسهولة.

سهل الفهم: الفورمات بتاع JSON مقروء للبشر والكمبيوتر.

التكامل: JSON شغال بكل سهولة مع JavaScript و React.

مثال بسيط:

[
  {
    "type": "h1",
    "content": "مرحبًا في المحرر",
    "attributes": {
      "style": {
        "color": "red",
        "fontSize": "32px"
      }
    }
  },
  {
    "type": "p",
    "content": "ده نص فقرة.",
    "attributes": {
      "style": {
        "color": "blue",
        "fontSize": "16px"
      }
    }
  }
]

بناء هيكل المحرر باستخدام React

تجهيز المشروع

اعمل مشروع React باستخدام:

npx create-react-app rich-text-editor

ضيف ملف editor.json عشان تخزن البيانات.

الكود الأساسي لتحويل JSON لعناصر HTML

import React from 'react';
import editorData from './editor.json';

const App = () => {
  return (
    <div>
      {editorData.map((item, index) =>
        React.createElement(
          item.type, // نوع العنصر (h1, p, img)
          { ...item.attributes, key: index }, // الخصائص
          item.content // المحتوى
        )
      )}
    </div>
  );
};

export default App;

النتيجة:

العناصر اللي في JSON هتظهر كـ HTML ديناميكي.

التوسع لدعم أنواع إضافية من العناصر

إضافة دعم الصور:

ممكن تعدل الكود عشان يدعم الصور باستخدام الشرط ده:

const renderElement = (item) => {
  if (item.type === 'img') {
    return <img {...item.attributes} key={item.key} />;
  }
  return React.createElement(item.type, { ...item.attributes }, item.content);
};

تحديث العرض الرئيسي:

const App = () => {
  return (
    <div>
      {editorData.map((item, index) => renderElement({ ...item, key: index }))}
    </div>
  );
};

النتيجة:

هتقدر تعرض الصور جنب النصوص.

حفظ واسترجاع المحتوى باستخدام MERN Stack

الفكرة:

MongoDB: تخزين JSON في قاعدة البيانات.

Express: بناء API لاسترجاع وحفظ البيانات.

React: عرض المحتوى الديناميكي.

مثال API بسيط:

Endpoint لحفظ البيانات:

app.post('/api/save', async (req, res) => {
  const content = new ContentModel(req.body);
  await content.save();
  res.send({ success: true });
});

استرجاع البيانات:

app.get('/api/content', async (req, res) => {
  const content = await ContentModel.find();
  res.send(content);
});

التكامل مع React:

import axios from 'axios';

const fetchContent = async () => {
  const response = await axios.get('/api/content');
  setEditorData(response.data);
};

الأفكار المستقبلية

إضافة التفاعل: تسمح بتعديل النصوص مباشرة.

السحب والإفلات: ترتيب العناصر بسهولة.

التصدير: توفير خيار لتحويل النصوص لـ PDF أو HTML.

الخاتمة

إنك تعمل محرر نصوص غني باستخدام React و JSON خطوة حلوة لفهم العلاقة بين البيانات والعرض في واجهات المستخدم. لو عندك أفكار تانية لتطوير المشروع ده، شاركنا رأيك! 💡

📂 الكود: [https://github.com/Ahmed-175/Richify-Editor]

#ReactJS #JavaScript #MERN #WebDevelopment

