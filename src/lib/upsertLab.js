import { formDataObj } from '$lib/formDataObj.js';
import moment from 'moment-timezone';

export function upsertLab(db, data, numberQuestions) {
  const qs = formDataObj(numberQuestions, data);
  const email = data.get("email");
  const table = data.get("table");
  const submit_time = moment().tz("America/Los_Angeles").format("YYYY-MM-DD hh:mm");

  let err = false;
  let ks = Object.keys(qs);

  let cols = ks.map(k => "answer" + k.replace("q", "")).join(", ");
  let COLUMNS = `(email, submiton, ${cols})`;

  let vals = ks.map(k => "$" + k).join(", ");
  let VALUES = `VALUES($email, $submiton, ${vals})`;

  let set = ["email = $email", "submiton = $submiton"];
  ks.forEach(k => {
    let kk = "answer" + k.replace("q", "");
    set.push(kk + " = " + "$" + k);
  });
  let SET = set.join(", ");

  qs["email"] = email;
  qs["submiton"] = submit_time;

  const stmt = db.prepare(`INSERT INTO ${table} ${COLUMNS} ${VALUES} ON CONFLICT(email) DO UPDATE SET ${SET}`);

  try {

    stmt.run(qs);

  } catch(e) {

    err = true;
    // console.log(e);

  }

  return err;
}
