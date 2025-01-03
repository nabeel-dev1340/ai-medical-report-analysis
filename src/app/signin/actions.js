"use server";
import { createClient } from "../../../utils/supabase/server";

export async function signInWithEmail(formData) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get("email"),
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: "http://localhost:3000/terms",
    },
  });
}
