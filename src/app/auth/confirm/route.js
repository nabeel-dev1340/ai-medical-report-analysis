import { createClient } from "../../../../utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request) {
  const url = new URL(request.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");
  const next = url.searchParams.get("next") || "/";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({ token_hash, type });

    if (!error) {
      // Redirect user to specified redirect URL or root of app
      redirect(next);
      return;
    }
  }

  // Redirect the user to an error page with some instructions
  redirect("/error");
}
