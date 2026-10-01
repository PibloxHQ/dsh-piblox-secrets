window.__ModuleLoader__.load({
  id: "dsh-piblox-secrets",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    let react = require("react");
    let jsxRuntime = require("react/jsx-runtime");
    let jsx = jsxRuntime.jsx;
    let jsxs = jsxRuntime.jsxs;
    let useState = react.useState;
    let useEffect = react.useEffect;
    let useCallback = react.useCallback;

    const SECTION_ID = "secrets";
    const LOCALE_NS = "settings.secrets";
    const API = "/api/piblox-secrets";

    /**
     * Visual language mirrors Discord Settings (dsh-piblox-discord):
     * Button / Pill / Field / Section via --dsw-alias-* only.
     * No PiBlox NYC palette literals, no system-color hardcodes, no secret masks.
     */
    const css = {
      page: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxWidth: "40rem",
        color: "var(--dsw-alias-label-primary, inherit)",
      },
      title: {
        margin: 0,
        fontSize: "1.25rem",
        letterSpacing: "-0.02em",
        color: "var(--dsw-alias-label-primary, inherit)",
      },
      subtitle: {
        margin: "0.25rem 0 0",
        fontSize: "0.9rem",
        lineHeight: 1.4,
        color: "var(--dsw-alias-label-secondary, inherit)",
        opacity: 0.9,
      },
      section: {
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        padding: "0.85rem 0",
        borderTop: "0.5px solid var(--dsw-alias-border-l2)",
      },
      sectionFirst: {
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        padding: "0.85rem 0 0.85rem",
      },
      sectionTitle: {
        margin: 0,
        fontSize: "0.95rem",
        fontWeight: 600,
        color: "var(--dsw-alias-label-primary, inherit)",
      },
      field: {
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
      },
      label: {
        fontSize: "0.8rem",
        color: "var(--dsw-alias-label-primary, inherit)",
      },
      hint: {
        margin: 0,
        fontSize: "0.75rem",
        color: "var(--dsw-alias-label-tertiary, inherit)",
      },
      input: {
        boxSizing: "border-box",
        width: "100%",
        padding: "0.5rem 0.65rem",
        borderRadius: "0.45rem",
        border: "0.5px solid var(--dsw-alias-border-l4)",
        background: "var(--dsw-alias-bg-layer-3, transparent)",
        color: "var(--dsw-alias-label-primary, inherit)",
        font: "inherit",
        fontSize: "0.9rem",
      },
      row: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "0.5rem",
      },
      card: {
        display: "flex",
        flexDirection: "column",
        gap: "0.55rem",
        padding: "0.75rem 0.85rem",
        borderRadius: "0.55rem",
        border: "0.5px solid var(--dsw-alias-border-l2)",
        background: "var(--dsw-alias-bg-layer-2)",
      },
      secretName: {
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "0.85rem",
        wordBreak: "break-all",
        color: "var(--dsw-alias-label-primary, inherit)",
      },
      btn: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem",
        padding: "0.4rem 0.75rem",
        borderRadius: "0.45rem",
        border: "0.5px solid var(--dsw-alias-border-l3)",
        background: "transparent",
        color: "var(--dsw-alias-label-primary, inherit)",
        font: "inherit",
        fontSize: "0.85rem",
        cursor: "pointer",
      },
      btnPrimary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem",
        padding: "0.45rem 0.9rem",
        borderRadius: "0.45rem",
        border: "0.5px solid transparent",
        background: "var(--dsw-alias-button-primary-fill)",
        color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-brand-primary-invert))",
        font: "inherit",
        fontSize: "0.85rem",
        cursor: "pointer",
      },
      btnDanger: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem",
        padding: "0.4rem 0.75rem",
        borderRadius: "0.45rem",
        border: "0.5px solid color-mix(in oklab, var(--dsw-alias-state-error-primary) 40%, transparent)",
        background: "transparent",
        color: "var(--dsw-alias-state-error-primary)",
        font: "inherit",
        fontSize: "0.85rem",
        cursor: "pointer",
      },
      btnDisabled: {
        opacity: 0.55,
        cursor: "not-allowed",
      },
      pill: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0.15rem 0.55rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        lineHeight: 1.4,
        color: "var(--dsw-alias-label-secondary, inherit)",
        background: "var(--dsw-alias-bg-layer-3)",
      },
      pillOk: {
        color: "var(--dsw-alias-state-success-primary)",
        background: "color-mix(in oklab, var(--dsw-alias-state-success-primary) 14%, transparent)",
      },
      muted: {
        fontSize: "0.9rem",
        color: "var(--dsw-alias-label-secondary, inherit)",
        opacity: 0.9,
      },
      error: {
        fontSize: "0.85rem",
        color: "var(--dsw-alias-state-error-primary)",
      },
      status: {
        fontSize: "0.75rem",
        color: "var(--dsw-alias-label-tertiary, inherit)",
      },
    };

    const DICT = {
      en: {
        nav: "Secrets",
        title: "Secrets",
        subtitle: "Encrypted vault for API keys. Values stay off model context.",
        empty: "No secrets yet. Add your first key below.",
        name: "Name",
        value: "Value",
        add: "Add secret",
        save: "Save",
        cancel: "Cancel",
        replace: "Replace",
        remove: "Remove",
        configured: "Configured",
        confirmDelete: "Delete this secret?",
        nameHint: "UPPER_SNAKE_CASE",
        newValueHint: "Enter a new value (write-only)",
        sectionVault: "Vault",
        sectionAdd: "Add secret",
        saving: "Saving…",
        saved: "Saved",
        error: "Something went wrong",
        loading: "Loading…",
      },
      zh: {
        nav: "密钥",
        title: "密钥",
        subtitle: "加密保管 API 密钥。模型上下文不会看到明文。",
        empty: "还没有密钥。在下方添加第一条。",
        name: "名称",
        value: "值",
        add: "添加密钥",
        save: "保存",
        cancel: "取消",
        replace: "替换",
        remove: "删除",
        configured: "已配置",
        confirmDelete: "删除此密钥？",
        nameHint: "UPPER_SNAKE_CASE",
        newValueHint: "输入新值（只写）",
        sectionVault: "保管库",
        sectionAdd: "添加密钥",
        saving: "保存中…",
        saved: "已保存",
        error: "出错了",
        loading: "加载中…",
      },
    };

    function tBound(ctx) {
      try {
        return ctx.locale.bind(LOCALE_NS);
      } catch {
        return (key) => DICT.en[key] || key;
      }
    }

    async function api(path, init) {
      const res = await fetch(API + path, {
        credentials: "same-origin",
        headers: { "content-type": "application/json", ...(init && init.headers) },
        ...init,
      });
      if (res.status === 204) return { ok: true };
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data && data.error) || res.statusText);
      return data;
    }

    function btnStyle(base, disabled) {
      return disabled ? { ...base, ...css.btnDisabled } : base;
    }

    function Section({ title, first, children }) {
      return jsxs("div", {
        style: first ? css.sectionFirst : css.section,
        children: [
          title ? jsx("h3", { style: css.sectionTitle, children: title }) : null,
          children,
        ],
      });
    }

    function Field({ id, label, hint, children }) {
      return jsxs("div", {
        style: css.field,
        children: [
          jsx("label", { htmlFor: id, style: css.label, children: label }),
          children,
          hint ? jsx("p", { style: css.hint, children: hint }) : null,
        ],
      });
    }

    function Pill({ ok, children }) {
      return jsx("span", {
        style: ok ? { ...css.pill, ...css.pillOk } : css.pill,
        children: children,
      });
    }

    /**
     * Configured secret row — write-only.
     * Never fetches or displays the existing value.
     */
    function SecretRow({ item, t, onError, onDeleted, busyGlobal }) {
      const [mode, setMode] = useState("configured"); // configured | replacing
      const [draft, setDraft] = useState("");
      const [saveState, setSaveState] = useState(""); // '' | saving | saved
      const busy = saveState === "saving" || busyGlobal;

      function enterReplace() {
        setDraft("");
        setSaveState("");
        setMode("replacing");
      }

      function cancelReplace() {
        setDraft("");
        setSaveState("");
        setMode("configured");
      }

      async function saveReplace(e) {
        if (e && e.preventDefault) e.preventDefault();
        const next = draft;
        if (!next || busy) return;
        setSaveState("saving");
        try {
          await api("", {
            method: "POST",
            body: JSON.stringify({ name: item.name, value: next }),
          });
          setDraft("");
          setMode("configured");
          setSaveState("saved");
          setTimeout(() => setSaveState((s) => (s === "saved" ? "" : s)), 1200);
        } catch (err) {
          setSaveState("");
          onError((err && err.message) || t("error"));
        }
      }

      async function onDelete() {
        if (!confirm(t("confirmDelete"))) return;
        try {
          await api("/" + encodeURIComponent(item.name), { method: "DELETE" });
          setDraft("");
          onDeleted();
        } catch (err) {
          onError((err && err.message) || t("error"));
        }
      }

      return jsxs("div", {
        style: css.card,
        "data-secret-name": item.name,
        "data-secret-state": mode === "replacing" ? "replacing" : "configured",
        children: [
          jsxs("div", {
            style: css.row,
            children: [
              jsx("code", { style: css.secretName, children: item.name }),
              jsx(Pill, { ok: true, children: t("configured") }),
            ],
          }),
          mode === "configured"
            ? jsxs("div", {
                style: css.row,
                children: [
                  jsx("button", {
                    type: "button",
                    style: btnStyle(css.btn, busy),
                    disabled: busy,
                    onClick: enterReplace,
                    children: t("replace"),
                  }),
                  jsx("button", {
                    type: "button",
                    style: btnStyle(css.btnDanger, busy),
                    disabled: busy,
                    onClick: () => void onDelete(),
                    children: t("remove"),
                  }),
                  saveState === "saved"
                    ? jsx("span", { style: css.status, children: t("saved") })
                    : null,
                ],
              })
            : jsxs("form", {
                onSubmit: (ev) => void saveReplace(ev),
                style: { display: "flex", flexDirection: "column", gap: "0.5rem" },
                children: [
                  jsx(Field, {
                    id: "replace-" + item.name,
                    label: t("value"),
                    hint: t("newValueHint"),
                    children: jsx("input", {
                      id: "replace-" + item.name,
                      type: "password",
                      value: draft,
                      autoComplete: "new-password",
                      spellCheck: false,
                      disabled: busy,
                      onChange: (ev) => setDraft(ev.target.value),
                      style: css.input,
                      // intentionally no placeholder mask / no prior value
                    }),
                  }),
                  jsxs("div", {
                    style: css.row,
                    children: [
                      jsx("button", {
                        type: "submit",
                        style: btnStyle(css.btnPrimary, busy || !draft),
                        disabled: busy || !draft,
                        children: saveState === "saving" ? t("saving") : t("save"),
                      }),
                      jsx("button", {
                        type: "button",
                        style: btnStyle(css.btn, busy),
                        disabled: busy,
                        onClick: cancelReplace,
                        children: t("cancel"),
                      }),
                    ],
                  }),
                ],
              }),
        ],
      });
    }

    function SecretsSection(props) {
      const t = (props && props.t) || ((k) => DICT.en[k] || k);
      const [items, setItems] = useState([]);
      const [err, setErr] = useState("");
      const [name, setName] = useState("");
      const [value, setValue] = useState("");
      const [busy, setBusy] = useState(false);
      const [loading, setLoading] = useState(true);

      const refresh = useCallback(async () => {
        setErr("");
        try {
          const names = await api("/names");
          setItems((names && names.items) || []);
        } catch (e) {
          setErr((e && e.message) || t("error"));
        } finally {
          setLoading(false);
        }
      }, [t]);

      useEffect(() => {
        void refresh();
      }, [refresh]);

      async function onAdd(e) {
        e.preventDefault();
        const n = name.trim();
        const v = value;
        if (!n || !v || busy) return;
        setBusy(true);
        setErr("");
        try {
          await api("", { method: "POST", body: JSON.stringify({ name: n, value: v }) });
          setName("");
          setValue("");
          await refresh();
        } catch (err2) {
          setErr((err2 && err2.message) || t("error"));
        } finally {
          setBusy(false);
        }
      }

      return jsxs("div", {
        className: "dsh-piblox-secrets",
        style: css.page,
        children: [
          jsxs("div", {
            children: [
              jsx("h2", { style: css.title, children: t("title") }),
              jsx("p", { style: css.subtitle, children: t("subtitle") }),
            ],
          }),

          jsx(Section, {
            title: t("sectionVault"),
            first: true,
            children: loading
              ? jsx("div", { style: css.muted, children: t("loading") })
              : items.length
                ? jsxs("div", {
                    style: { display: "flex", flexDirection: "column", gap: "0.55rem" },
                    children: items.map((item) =>
                      jsx(
                        SecretRow,
                        {
                          item: item,
                          t: t,
                          onError: setErr,
                          onDeleted: () => void refresh(),
                          busyGlobal: busy,
                        },
                        item.name,
                      ),
                    ),
                  })
                : jsx("div", { style: css.muted, children: t("empty") }),
          }),

          jsx(Section, {
            title: t("sectionAdd"),
            children: jsxs("form", {
              onSubmit: onAdd,
              style: { display: "flex", flexDirection: "column", gap: "0.65rem" },
              children: [
                jsx(Field, {
                  id: "secrets-new-name",
                  label: t("name"),
                  hint: t("nameHint"),
                  children: jsx("input", {
                    id: "secrets-new-name",
                    value: name,
                    autoComplete: "off",
                    spellCheck: false,
                    disabled: busy,
                    onChange: (ev) => setName(ev.target.value),
                    style: css.input,
                  }),
                }),
                jsx(Field, {
                  id: "secrets-new-value",
                  label: t("value"),
                  hint: t("newValueHint"),
                  children: jsx("input", {
                    id: "secrets-new-value",
                    type: "password",
                    value: value,
                    autoComplete: "new-password",
                    disabled: busy,
                    onChange: (ev) => setValue(ev.target.value),
                    style: css.input,
                  }),
                }),
                jsx("div", {
                  style: css.row,
                  children: jsx("button", {
                    type: "submit",
                    style: btnStyle(css.btnPrimary, busy || !name.trim() || !value),
                    disabled: busy || !name.trim() || !value,
                    children: busy ? t("saving") : t("add"),
                  }),
                }),
              ],
            }),
          }),

          err ? jsx("div", { style: css.error, role: "alert", children: err }) : null,
        ],
      });
    }

    function apply(ctx) {
      if (!ctx.slots || !ctx.slots.inject) return;

      ctx.effect(
        () => ctx.locale.register(LOCALE_NS, { en: DICT.en, zh: DICT.zh }),
        "dsh-piblox-secrets: locale",
      );

      const t = tBound(ctx);
      const injected = () => ({ t });

      ctx.slots.inject("settings.section", () =>
        ctx.slots.register(
          {
            name: "settings.section",
            id: SECTION_ID,
            order: 15,
            label: () => t("nav"),
            locale: LOCALE_NS,
            inject: injected,
          },
          SecretsSection,
        ),
      );
    }

    exports.apply = apply;
    // DSH ≥ 0.2: settingsScope removed. This client only needs slots+locale
    // (section UI is remote-driven; host settings install uses soft inject).
    exports.inject = ["slots", "locale"];
    exports.SecretsSection = SecretsSection;
    return module.exports;
  },
});
