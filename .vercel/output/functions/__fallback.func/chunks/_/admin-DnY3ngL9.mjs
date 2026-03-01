import { jsxs, jsx } from 'react/jsx-runtime';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(
  "https://ibzmkaafxlsglratouwp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imliem1rYWFmeGxzZ2xyYXRvdXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDYzMDYsImV4cCI6MjA2NjY4MjMwNn0.8czBGpFGVUherHiaPO14p-Rgu7ZkodzpaV0UfIf708I"
);
function RouteComponent() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchVisitors = async () => {
    const {
      data,
      error
    } = await supabase.from("visitor_locations").select("*").order("visited_at", {
      ascending: false
    });
    if (error) {
      console.error("Error fetching visitors:", error);
    } else {
      setVisitors(data ?? []);
    }
    setLoading(false);
  };
  const saveVisit = async () => {
    try {
      const response = await fetch("https://ipinfo.io/json?token=5c6ea39b920f38");
      const location = await response.json();
      const {
        error
      } = await supabase.from("visitor_locations").insert({
        city: location.city,
        region: location.region,
        country: location.country
      });
      if (error) throw error;
      fetchVisitors();
    } catch (err) {
      console.error("Error saving visit:", err);
    }
  };
  useEffect(() => {
    saveVisit();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "pt-60", children: [
    /* @__PURE__ */ jsx("p", { children: 'Hello "/admin"!' }),
    /* @__PURE__ */ jsx("div", { children: loading ? /* @__PURE__ */ jsx("p", { children: "Loading visitors..." }) : /* @__PURE__ */ jsx("ul", { children: visitors.map((v) => /* @__PURE__ */ jsxs("li", { className: "capitalize", children: [
      v.city,
      ", ",
      v.region,
      ", ",
      v.country,
      /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-400", children: new Date(v.visited_at).toLocaleString() })
    ] }, v.id)) }) })
  ] });
}

export { RouteComponent as component };
//# sourceMappingURL=admin-DnY3ngL9.mjs.map
